const { google } = require('googleapis');
require('dotenv').config();
const googleApiKey = process.env.API_KEY_2;

const youtube = google.youtube({
  version: 'v3',
  auth: googleApiKey,
});
const getVideos = async (hobby) => {
  const videos = await getVideosOnHobby(hobby);
  return videos;
};

const getVideosOnHobby = async (hobby) => {
  const videos = await youtube.search.list({
    part: ['snippet'],
    q: hobby,
    maxResults: 10,
  });

  return videos.data.items.map((item) => {
    return {
      title: item.snippet.title,
      id: item.id,
      thumbnailUrl: item.snippet.thumbnails.default.url,
    };
  });
};

module.exports.getVideos = getVideos;
