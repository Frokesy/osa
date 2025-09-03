export const historyPageQuery = `*[_type == "historyPage"][0]{
  hero{
    title,
    subtitle,
    backgroundImage{
      asset->{url}
    }
  },
  historyText,
  whatWeDo{
    title,
    description,
    bullets,
    image{
      asset->{url}
    }
  }
}`;
