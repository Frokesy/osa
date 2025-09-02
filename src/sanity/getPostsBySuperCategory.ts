import { client } from "./client";

export const getPostsBySuperCategory = async (superCategory: string) => {
  return await client.fetch(
    `*[_type == "post" && superCategory == $superCategory] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "author": author->{
            name,
            image { asset->{ url } }
          },
      category,
      subtext,
      body,
      image{asset->{url}},
    }`,
    { superCategory }
  );
};
