/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import TopNav from "../../components/defaults/TopNav";
import { motion, AnimatePresence } from "framer-motion";
import Fallback from "../../components/defaults/Fallback";
import { client } from "../../sanity/client";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).auto("format").fit("max").url();
}

interface GalleryImage {
  image: any;
  caption?: string;
}

interface GalleryData {
  title: string;
  images: GalleryImage[];
}

const Gallery = () => {
  const [gallery, setGallery] = useState<GalleryData | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const data = await client.fetch(
        `*[_type == "gallery"][0]{
          title,
          images[]{ image, caption }
        }`
      );
      setGallery(data);
    };
    fetchGallery();
  }, []);

  if (!gallery) {
    return <Fallback />;
  }

  return (
    <Container>
      <TopNav />

      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="lg:text-[36px] text-[24px] text-[#223D94] font-semibold">
          {gallery.title}
        </h2>
      </div>

      <div className="w-[90vw] mx-auto mt-10">
        <div
          className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            auto-rows-[200px]
          "
        >
          {gallery.images?.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={urlFor(item.image)}
                alt={item.caption || `gallery-${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={urlFor(selectedImage.image)}
                alt={selectedImage.caption || "Selected"}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              {selectedImage.caption && (
                <p className="text-center text-white mt-3 text-lg">
                  {selectedImage.caption}
                </p>
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-white/90 text-black px-3 py-1 rounded-full shadow-md hover:bg-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </Container>
  );
};

export default Gallery;
