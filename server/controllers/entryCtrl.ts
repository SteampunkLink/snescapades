import { RequestHandler } from "express";

import allEntries from "../data/entries";
import allGames from "../data/games";

import Episode from "../models/Episode";

const limit = 10;

interface formatEpisodeArgs {
  seriesTitle: string;
  episodes: Episode[];
  type: string;
  slug: string;
}

interface formatEpisodeResultGames {
  gameTitle: string;
  index: number;
}

interface formatEpisodeResult {
  // episode
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
  topics?: string[];
  isPublished: boolean;
  // series
  type: string;
  seriesTitle: string;
  slug: string;
  formattedGames?: formatEpisodeResultGames[];
}

const formatEpisodes = ({
  seriesTitle,
  episodes,
  type,
  slug,
}: formatEpisodeArgs): formatEpisodeResult[] => {
  let formattedEpisodes: formatEpisodeResult[] = [];
  const filteredEpisodes = episodes.filter((ep) => ep.isPublished);
  filteredEpisodes.forEach((ep) => {
    if (ep.games && ep.games.length) {
      const formattedGames = ep.games.map((g) => ({
        gameTitle: allGames[g].gameTitle,
        index: g,
      }));
      formattedEpisodes.push({
        ...ep,
        type,
        seriesTitle,
        slug,
        formattedGames,
      });
    } else {
      formattedEpisodes.push({ ...ep, type, seriesTitle, slug });
    }
  });
  return formattedEpisodes;
};

interface sortAndPaginateArgs {
  epList: formatEpisodeResult[];
  page: number;
}

interface sortAndPaginateResult {
  entries: formatEpisodeResult[];
  page: number;
  pages: number;
}

const sortAndPaginate = ({
  epList,
  page,
}: sortAndPaginateArgs): sortAndPaginateResult => {
  const sorted = epList.sort(
    (a, b) => b.published.getTime() - a.published.getTime()
  );
  const count = epList.length;
  const start = limit * (page - 1);
  const end = start + limit < count ? start + limit : count;
  return {
    entries: sorted.slice(start, end),
    page,
    pages: Math.ceil(count / limit),
  };
};

interface getEntriesQuery {
  page?: number;
}

// GET /api/entries?page=:page
// gets all entries with pagination
export const getAllEntries: RequestHandler<
  unknown,
  unknown,
  unknown,
  getEntriesQuery
> = (req, res, next) => {
  const page = req.query.page || 1;
  let epList: formatEpisodeResult[] = [];
  try {
    allEntries.forEach((show) => {
      const formatEpisodeArgsForShow = {
        seriesTitle: show.seriesTitle,
        episodes: show.episodes,
        type: show.type,
        slug: show.slug,
      };
      const formattedEpisodeList: formatEpisodeResult[] = formatEpisodes(
        formatEpisodeArgsForShow
      );
      epList = epList.concat(formattedEpisodeList);
    });

    const result = sortAndPaginate({ epList, page });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

interface getEntriesParams {
  series: string;
}

// GET /api/entries/:series
// gets all entries for one series with pagination
export const getOneSeries: RequestHandler<
  getEntriesParams,
  unknown,
  unknown,
  getEntriesQuery
> = (req, res, next) => {
  let epList: formatEpisodeResult[] = [];
  try {
    const series = req.params.series;
    const page = req.query.page || 1;

    if (!series) {
      throw new Error("Series not found.");
    }

    const showData = allEntries.find((e) => e.slug === series);

    if (!showData) {
      throw new Error("Series not found.");
    }

    epList = formatEpisodes({
      seriesTitle: showData.seriesTitle,
      episodes: showData.episodes,
      type: showData.type,
      slug: showData.slug,
    });

    const pageData = sortAndPaginate({ epList, page });

    res.status(200).json({
      seriesTitle: showData.seriesTitle,
      description: showData.description,
      episodes: pageData.entries,
      page: pageData.page,
      pages: pageData.pages,
    });
  } catch (error) {
    next(error);
  }
};

interface getOneEntryParams {
  series: string;
  epNum: number;
}

// GET /api/episode/:series/:epNum
// returns a single episode
export const getOneEntry: RequestHandler<
  getOneEntryParams,
  unknown,
  unknown,
  unknown
> = (req, res, next) => {
  try {
    const series = req.params.series;
    const epNum = Number(req.params.epNum);
    if (!series || !epNum) {
      throw new Error("Episode not found.");
    }
    const showData = allEntries.find((s) => s.slug === series);
    if (!showData) {
      throw new Error("Episode not found.");
    }
    const episodeData = showData.episodes.find(
      (e) => e.episodeNumber === epNum
    );
    if (!episodeData) {
      throw new Error("Episode not found.");
    }
    const returnEpisodeData = formatEpisodes({
      seriesTitle: showData.seriesTitle,
      episodes: [episodeData],
      type: showData.type,
      slug: showData.slug,
    });
    res.status(200).json(returnEpisodeData[0]);
  } catch (error) {
    next(error);
  }
};

interface getSeriesIndexSeriesData {
  seriesTitle: string;
  slug: string;
  description: string;
  order: number;
}

// GET /api/series
// returns series index data
export const getSeriesIndex: RequestHandler = (req, res, next) => {
  try {
    let seriesIndexData: getSeriesIndexSeriesData[] = [];
    allEntries.forEach((s) => {
      seriesIndexData.push({
        seriesTitle: s.seriesTitle,
        slug: s.slug,
        description: s.description,
        order: s.order,
      });
    });
    seriesIndexData = seriesIndexData.sort((a, b) => a.order - b.order);
    res.status(200).json(seriesIndexData);
  } catch (error) {
    next(error);
  }
};
