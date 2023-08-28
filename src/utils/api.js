import axios from "axios";

const Base_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const fetchData = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
  return data;
};

export default fetchData;
