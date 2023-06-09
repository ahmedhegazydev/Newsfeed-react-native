interface Source {
  id: string;
  name: string;
}

interface New {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export { New, Source };
