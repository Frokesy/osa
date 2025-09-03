export const servicePageQuery = `
*[_type == "servicePage" && slug.current == $slug][0]{
  title,
  subText,
  heroContent,
  image{
    asset->{url}
  },
  paragraphs,
  items[]{
    title,
    description,
    features,
    bg,
    image{
      asset->{url}
    }
  }
}
`;

export const allServicesQuery = `
  *[_type == "servicePage"]{
    title,
    slug,
    subText,
    icon
  } | order(title asc)
`;
