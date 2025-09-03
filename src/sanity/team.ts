export const teamPageQuery = `*[_type == "teamPage"][0]{
  members[] {
    name,
    role,
    bgColor,
    image{
      asset->{url}
    }
  }
}`;
