export default interface Episode {
  episodeTitle: string;
  episodeNumber: number;
  length: string;
  published: Date;
  embedURL: string;
  youtubeURL?: string;
  image: string;
  blog: string;
  games?: number[];
  altText: string;
  isPublished: boolean;
}
