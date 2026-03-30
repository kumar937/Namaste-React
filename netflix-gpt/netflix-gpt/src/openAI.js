import { GoogleGenerativeAI } from "@google/generative-ai";
import { googleApiKey } from "./utils/constants";
const genAI = new GoogleGenerativeAI(googleApiKey);

export const getMovieRecommendations = async (searchQuery) => {
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview", });

  const prompt = `
    you are a Movie recommendation assistant. Suggest 5 movies for this query "${searchQuery}".
    Return only movie names in comma separated format like example result ahead Example Result = kaidhi,temper,ashok,kaidhi,sitamma vakitlo sirimalla chettu.
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};