# Welcome

This site aims to help people discover interesting hobbies and activities to enjoy during their leisure hours. It gathers a variety of cool and unique hobby ideas, ranging from arts and crafts to outdoor adventures. For each hobby idea, the website uses videos from the YouTube Data API and books from the Google Books API to provide resources for those who want to start learning something new.

---

# Dependencies

<!-- prettier-ignore -->
| **Number** | **Dependencies** |              **How to install**                    |   
|------------|------------------|----------------------------------------------------|      
| 1.         | Express          | ```npm install express```                          | 
| 2.         | Google APIs      | ```npm i googleapis ```                            |
|            | Node.js Client   |                                                    |
| 3.         | Nodemon          | ```npm i nodemon```                                |

# Architecture

- A web-based user interface where users can select parameters to generate a random hobby,
  and view both videos and books on the same page.
- A server-side application that handles requests, communicates with external APIs, and
  provides data to the client-side.

# Technologies

- The user interface is created using CSS, HTML, and Javascript.
- This web application uses Express.js handle the server side.

# Resources

1. API Ninjas:

   - Service Description: API Ninjas provides data sources using 78 data APIs and can
     return hobby ideas along with Wikipedia links related to hobbies.
   - API Endpoint:
     GET https://api.api-ninjas.com/v1/hobbies?category={parameter}

2. YouTube Data API:

   - Service Description: The YouTube Data API allows developers to integrate
     YouTube functionalities into their applications. This includes searching for videos,
     uploading videos, managing playlists, subscribing to channels, accessing comments,
     and more.
   - API Endpoint:
     GET https://www.googleapis.com/youtube/v3/search

3. Google Books API:
   - Service Description: The Google Books API provides access to information related
     to books and their content. It offers features such as book search, book retrieval,
     book content access, bookshelves, categories, genres, and more.
   - API Endpoint:
     GET https://www.googleapis.com/books/v1/volumes?q={search terms}

# Install node_modules

```bash
npm i
```

# Contact

lanna.graduate.c@gmail.com
