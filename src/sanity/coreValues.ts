export const coreValuesPageQuery = `*[_type == "coreValuesPage"][0]{
  hero{
    title,
    subtitle,
    heroContent,
    backgroundImage{
      asset->{url}
    }
  },
  intro{
    title,
    description
  },
  values[]{
    title,
    description
  }
}`;
