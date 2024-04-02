interface formatEpisodeResultGames {
  gameTitle: string;
  index: number;
}

export default interface Entry {
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
  type: string;
  seriesTitle: string;
  slug: string;
  formattedGames?: formatEpisodeResultGames[];
}
