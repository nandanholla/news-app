import axios from "axios";
import { selectFields } from "./selectFields";

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";
const STORY_URL = `${BASE_URL}item/`;

export const getStories = async (type, num) => {
  try {
    const ids = await axios
      .get(`${BASE_URL + type}stories.json`)
      .then(({ data }) => {
        return data;
      });
    return Promise.all(
      ids.slice(0, num).map(async (id) => {
        const story = await axios
          .get(`${STORY_URL + id}.json`)
          .then(({ data }) => selectFields(data));
        return story;
      })
    );
  } catch (error) {
    console.log(error);
  }
};
