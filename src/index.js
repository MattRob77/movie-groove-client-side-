fetch('http://localhost:3000/movies')
.then(resp => resp.json())
.then(movies => {
  movies.forEach(movie =>{
    const {id, title, description, genre, image, stars} = movie
    new Movie(id, title, description, genre, image, stars)
  })
})

document.querySelector('form').addEventListener('submit', addMovie)

function addMovie(e) {
  e.preventDefault()
  const data = {
    'title': e.target.title.value
    'description': e.target.description.value
    'genre': e.target.genre.value
    'stars': e.target.stars.value
    'Image': e.target.img.value
  }
  fetch('http://localhost:3000/movies', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}
