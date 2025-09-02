import { useEffect, useState } from "react";
import { client } from "../sanity/client";

import type { TypedObject } from "@sanity/types";

interface Subsection {
  subsectionTitle: string;
  subsectionBody: TypedObject[];
}

interface Author {
  name: string;
  image?: { asset: { url: string } };
}

interface Post {
  _id: string;
  title: string;
  subtext: string;
  date: string;
  superCategory: string;
  category: string;
  slug: { current: string };
  author: Author;
  content: Subsection[];
  image?: { asset: { url: string } };
}

export function usePost(slug: string | undefined) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!slug) return;

    client
      .fetch<Post>(
        `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          subtext,
          date,
          superCategory,
          category,
          slug,
          "author": author->{
            name,
            image { asset->{ url } }
          },
          image{asset->{url}},
          content[]{
            subsectionTitle,
            subsectionBody
          }
        }`,
        { slug }
      )
      .then(setPost)
      .catch(console.error);
  }, [slug]);

  return post;
}
