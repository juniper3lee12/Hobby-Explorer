function showTab(section) {
  const videos = document.getElementById('videosSection');
  const books = document.getElementById('booksSection');
  const containerResults = document.querySelector('.container__results');

  document
    .querySelectorAll('.tab-content')
    .forEach((content) => content.classList.remove('show'));

  document
    .querySelectorAll('.tab')
    .forEach((tab) => tab.classList.remove('active'));

  if (section === 'all') {
    videos.classList.add('show');
    books.classList.add('show');
  } else if (section === 'videos') {
    videos.classList.add('show');
    books.classList.remove('show');

    containerResults.style.display = 'block';
    containerResults.style.gridTemplateAreas = 'none';
    containerResults.style.gridTemplateColumns = 'none';
  } else if (section === 'books') {
    books.classList.add('show');
    videos.classList.remove('show');

    containerResults.style.display = 'block';
    containerResults.style.gridTemplateAreas = 'none';
    containerResults.style.gridTemplateColumns = 'none';
  }

  document
    .querySelector(`.tab[onclick="showTab('${section}')"]`)
    ?.classList.add('active');
}
