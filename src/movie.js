class Movie {
  constructor(id, title, description, genre, image, stars){
  this.id = id
  this.title = title
  this.description = description
  this.genre = genre
  this.image = image
  this.stars = stars
  this.image = image
  this.render()
  }

  delete(e) {
    const id = e.target.dataset.id
    fetch(`http://localhost:3000/movies/${id}`,{
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json'
      }
    }).then (()=>{
      e.target.parentElement.remove()
    })
  }


  render() {
    const movieContainer = document.getElementById('movie-container')
    const movieCard = document.createElement('div')

    movieCard.classList.add('movie-card')
    movieCard.id = this.id
    movieCard.innerHTML = `
        <h2>${this.title}</h2>
          <img src/>
        <p>Description: ${this.description}</p>
        <p>Genre: ${this.genre}</p>
        <p>Stars: ${this.stars}</p>
        <button data-id="${this.id}" class="delete">Delete Movie?</button>
        <div class="container">
        <a href="#" class="button">Review Movie</a>
        </div> 


      `
    movieContainer.appendChild(movieCard)
    movieCard.addEventListener('click', e => {
      if (e.target.className === 'delete') this.delete(e)
      if (e.target.classname === 'create') {
        this.create(e)
      }
    })
  }
}
