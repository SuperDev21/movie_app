import React from 'react'
import './App.css';
import { movies$ } from './data/movies'
import Header from './components/Header'
import Container from './components/Container/Container';
import Pagination from './components/Pagination';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      movies: [], 
      // like: '',
      likes: '',
      dislikes: '',
      id:'',
      likeAction: null,
      dislikeAction: null,
      classLike: 'fa fa-thumbs-o-up',
      // class: 'fa fa-thumbs-o-up',
      classDislike: 'fa fa-thumbs-o-down',
      copyMovies: [],
      searchValue: "",
      numberMoviesInPage: '',
      counterPage: 1,
    }
}

// fonction qui recupère le data de movies.js et le stocker dans le state
  // getData = () =>{
  //   movies$
  //   .then((data) => this.setState({movies: data, copyMovies: data}))
  //   .catch((error) => {console.log(error)})
  // }

  // ################
  getData = () =>{
    movies$
    .then((data) => this.setState({movies: data, copyMovies: data}))
    .catch((error) => {console.log(error)})
  }



  // #####################

  componentDidMount() {
    this.getData()
  }

  // fonction pour supprimer un film
  deleteMovie = (item) =>{
    let newMovies = this.state.movies.filter(movies =>{
      return movies !== item
    }) 
    this.setState({ movies: newMovies})
  }

  // fonction pour ajouter like/dislike au film
  // toggleLikesFunction = (likes, id) =>{
    // console.log('toggleLike', this.state.toggleLike)
  //   this.setState({
  //     toggleLike: !this.state.toggleLike, 
  //     like: likes, 
  //     id: id, 
  //   })      
  //   if (this.state.toggleLike === true){
  //     this.setState({class: "fa fa-thumbs-up", like: likes + 1})
  //   } 
  //   else if (this.state.toggleLike === false){
  //     this.setState({class: "fa fa-thumbs-o-up", like: likes})
  //   }
  // }
 

  // toggleDislikesFunction = (dislikes, id) =>{
        // console.log('toggdisleLike', this.state.toggleDislike)
  //       this.setState({
  //         id: id, 
  //         dislikes: dislikes,
  //         toggleDislike: !this.state.toggleDislike
  //       }) 
  //       if (this.state.toggleDislike === true){
  //         console.log('dislikestrrrr', dislikes)
  //         this.setState({classDislike: "fa fa-thumbs-down", dislikes: dislikes + 1})
  //       }     
  //       else if (this.state.toggleDislike === false){
  //          console.log('toggleDislike fff', this.state.toggleDislike)
  //         this.setState({classDislike: "fa fa-thumbs-o-down",  dislikes: dislikes})
  //       } 
     
  // }



  // ######################################""

modifierState = () =>{
    // 1. Make a shallow copy of the items
    let movies = [...this.state.movies];
    // 2. Make a shallow copy of the item you want to mutate
    let elem = {...movies[1]};
    // 3. Replace the property you're intested in
    elem.likes = elem.likes + 5 ;
    elem.likeAction = null;
    elem.dislikeAction = null;
    console.log('elem likeAction', elem.likeAction)
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    movies[1] = elem;
    // 5. Set the state to our new copy
    this.setState({movies});
    console.log('movies updated', this.state.movies)


}


  // #########################################""

  onLike = (id, likes, dislikes) =>{
    // if(this.state.id === '' || this.state.id === id){
    this.setState({id: id, likes: likes, dislikes: `${this.state.dislikes === '' ? dislikes : this.state.dislikes}`})
    console.log('likes ===', this.state.likes, 'dislikes ===', this.state.dislikes)
      if(this.state.likeAction === null){
        this.setState({likes: likes + 1, likeAction: 'liked', classLike: 'fa fa-thumbs-up'})
        console.log('likes après if ===', this.state.likes, 'dislikes ===', this.state.dislikes)
        if(this.state.dislikeAction !== null){
          this.setState({dislikes: this.state.dislikes - 1, dislikeAction: null, classDislike: 'fa fa-thumbs-o-down'})
        }
      }else{
        this.setState({likes: this.state.likes - 1, likeAction: null, classLike: 'fa fa-thumbs-o-up'})
      }
    // }
  //   else{
  //     this.setState({id: '', likes: '', dislikes: '', likeAction: null, dislikeAction: null})
  // }
  
  }



  onDislike = (id, likes, dislikes) =>{
    // if(this.state.id === '' || this.state.id === id){
      this.setState({id: id, likes: `${this.state.likes === ''? likes : this.state.likes}`, dislikes: dislikes})
      if(this.state.dislikeAction !== null){
        this.setState({dislikes: this.state.dislikes - 1, dislikeAction: null, classDislike: 'fa fa-thumbs-o-down'})
      }else{
        this.setState({dislikes: dislikes + 1, dislikeAction: 'disliked', classDislike: 'fa fa-thumbs-down'})
        if(this.state.likeAction !== null){
          this.setState({likes: this.state.likes - 1, likeAction: null, classLike: 'fa fa-thumbs-o-up'})
        }
      }
    // }
  //   else{
  //     this.setState({id: '', likes: '', dislikes: '', likeAction: null, dislikeAction: null})
  // }
  }

  // ##############################################


  // fonction recuper la valeur de champ recherche
 handlechange = (e) =>{
  this.setState({
    searchValue: e.target.value,
    movies: this.state.copyMovies.filter((elem) =>  elem.title.toLowerCase().includes(e.target.value.toLowerCase()))
  })
 }


// founction pour filtrer les films
  clickToFilter = (cat) =>{
    if (cat === "tous"){
      this.setState({movies: this.state.copyMovies})
    }
    if (cat === "populaire"){
      this.setState({movies: this.state.copyMovies.filter(elem => elem.likes > 10)})
    }
    if (cat === "1"){
      this.setState({movies: this.state.copyMovies.filter(elem => elem.category === 'Comedy')})
    }
    if (cat === "2"){
      this.setState({movies: this.state.copyMovies.filter(elem => elem.category === 'Drame')})
    }
    if (cat === "3"){
      this.setState({movies: this.state.copyMovies.filter(elem => elem.category === 'Thriller')})
    }
    if (cat === "4"){
      this.setState({movies: this.state.copyMovies.filter(elem => elem.category === 'Animation')})
  }
  }

  // fonction pour choisir le nombre de films afficher par page
  selectNumberMovies = (n) =>{
    let listMovies = []
    for(let count = 1; count <= this.state.copyMovies.length; count++){
      if(count <= n ){
        listMovies.push(this.state.copyMovies[count-1])
      }}
    this.setState({movies: listMovies, numberMoviesInPage: n})
  }

  // founction qui gère le pagination
  changePage = (direction) =>{
    let numberPages = this.state.copyMovies.length/this.state.numberMoviesInPage
      if (direction === 'Next'){
        let newCounterPage = this.state.counterPage +1
        if(Math.ceil(numberPages) >= newCounterPage){
          this.setState({
            counterPage: newCounterPage,
            movies: this.state.copyMovies.slice(this.state.numberMoviesInPage * this.state.counterPage,
            this.state.numberMoviesInPage * ( this.state.counterPage + 1))
          });
        }
      }
      else if (direction === "Previous" && this.state.counterPage !== 0){
        let newCounterPage = this.state.counterPage -1
        console.log('newCounterPage Prev', newCounterPage)
        console.log('(direction', direction)
        this.setState({
        counterPage: newCounterPage,
        movies: this.state.copyMovies.slice(this.state.numberMoviesInPage * ( this.state.counterPage - 1),
        this.state.numberMoviesInPage * this.state.counterPage)});
      }
  }


  render(){
    return (
        <div className="App">
          <Header clickToFilter={this.clickToFilter}
            handlechange={this.handlechange } 
            searchValue={this.state.searchValue}/>
          <Container movies={this.state.movies} deleteMovie={this.deleteMovie}
            // toggleLikesFunction={this.toggleLikesFunction} 
            // toggleLike={this.state.toggleLike}
            // class={this.state.class}
            likes={this.state.likes}
            id={this.state.id}
            classDislike={this.state.classDislike}
            classLike={this.state.classLike}
            onLike={this.onLike}
            onDislike={this.onDislike}
            // toggleDislikesFunction={this.toggleDislikesFunction}
            dislikes={this.state.dislikes}
            modifierState={this.modifierState}/>
          <Pagination selectNumberMovies={this.selectNumberMovies}
          changePage={this.changePage}/>
        </div>
    );
  }

}

export default App;
