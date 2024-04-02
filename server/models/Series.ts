import Episode from "./Episode";

export default interface Series {
  seriesTitle: string;
  slug: string; // easily searchable string to get specific entries
  description: string;
  order: number; // the order it will appear in the series index
  episodes: Episode[];
  type: string; // podcast, video, or blog
}
