const { google } = require('googleapis');
require('dotenv').config();
const googleApiKey = process.env.API_KEY_2;

const books = google.books({
  version: 'v1',
  auth: googleApiKey,
});
const apiUrl = '';
const getBooks = async (hobby) => {
  const books = await getBooksOnHobby(hobby);
  return books;
};

const getBooksOnHobby = async (hobby) => {
  const results = await books.volumes.list({
    q: hobby,
    maxResults: 10,
  });

  const bs = [];
  results.data.items.forEach((item) => {
    bs.push({
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      thumbnail: item.volumeInfo.imageLinks?.thumbnail,
      description: item.volumeInfo.description,
      previewLink: item.volumeInfo.previewLink,
    });
  });
  return bs;
};

module.exports.getBooks = getBooks;
