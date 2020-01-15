fetch('http://localhost:3000/movies')
.then(resp => resp.json())
.then(movies => {
  movies.forEach(movie =>{
    const {id, title, description, genre, image, stars} = movie
    new Movie(id, title, description, genre, image, stars)
  })
})
