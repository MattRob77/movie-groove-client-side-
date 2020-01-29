class Movie {
  constructor(id, title, description, genre, image, stars){
    //Method for creating and initializing an object in a class
    //Properties
  this.id = id
  this.title = title
  this.description = description
  this.genre = genre
  this.image = image
  this.stars = stars
  this.image = image
  this.render()
  }
  //class function(Object-oriented programming) = objects that contain data
  //this.(Object it belongs to)
  //render is a show page

  delete(e) {
    const id = e.target.dataset.id
    fetch(`http://localhost:3000/movies/${id}`,{
      method: "DELETE", //For sending a method through we need another argument
      headers:{
        'Content-Type': 'application/json' //Lets my applciation know what data was returned
      }
    }).then (()=>{
      e.target.parentElement.remove()
    })
  }


  render() {
    const movieContainer = document.getElementById('movie-container')//showing the data thats contained in movie-container
    const movieCard = document.createElement('div') //creates new element "div"

    movieCard.classList.add('movie-card')
    movieCard.id = this.id //movieCard.id is the same as id that's assigned in the movie class
    //Created Element
    movieCard.innerHTML = `
        <h2>${this.title}</h2>
        <img src="${this.image}"/>
        <p>Description: ${this.description}</p>
        <p>Genre: ${this.genre}</p>
        <p>Stars: ${this.stars}</p>
        <button data-id="${this.id}" class="delete">Delete Movie?</button>
        <div class="container">
        <a href="#" class="button">Review Movie</a>
        </div>

      `
    movieContainer.appendChild(movieCard)
    movieCard.addEventListener('click', e => { //Waits for the event to get fired listens for it
      if (e.target.className === 'delete') this.delete(e) //Added conditonal "==="for JS pass (e )
      if (e.target.classname === 'create') {
        this.create(e)
      }
    })
  }
}

//1.Selecting container
//2.Creating a card to append to the container
//3.Appending in Javascript is a way to insert content to the end of already existing elements
