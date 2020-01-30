fetch('http://localhost:3000/movies') //returns a promise that (fetches = grabs my data from server)
.then(resp => resp.json()) //Get objects and parse it to make it more processable
.then(movies => {
  movies.forEach(movie =>{ //provides a callback function()/Map in React
    const {id, title, description, genre, image, stars} = movie //Setting the constant = to Movie
    new Movie(id, title, description, genre, image, stars)//Passing in all the attributes
  })
})
//const creates a read only value(will not change)

document.querySelector('form').addEventListener('submit', addMovie)

//querySelector returns first element matching the selector('form')
//addEventListener method attaches an event handler to the specified element(waits for event)

function addMovie(e) { //function(code that performs a task)
const data = { //defined data
  'title': e.target.title.value, //targets the element/attributes
  'description': e.target.description.value,
  'genre': e.target.genre.value,
  'stars': e.target.stars.value,
  'image': e.target.img.value
}

  fetch('http://localhost:3000/movies/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({data}) //data sent to server needs to be a string, converts JS to JSON
  }).then((movie) => {
    const {id, title, description, genre, image, stars} = movie
    const newMovie=new Movie(id, title, description, genre, image, stars)

  })

}
