class Movie {
  constructor(id, title, description, genre, image, stars){
  this.id = id
  this.title = title
  this.description = description
  this.genre = genre
  this.image = image
  this.stars = stars
  this.render()
  }

  delete() {
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
        <img src="${this.image}" />
        <p>Description: ${this.description}</p>
        <p>Genre: ${this.genre}</p>
        <p>Stars:</p>
        <button data-id="${this.id}" class="delete">Delete Movie?</button
      `
    movieContainer.appendChild(movieCard)
    movieCard.addEventListener('click', e => {
      if (e.target.className === 'delete') this.delete(e)
    })
  }
}
