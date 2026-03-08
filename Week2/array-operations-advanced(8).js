// Test Data
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];



//1. filter() only "Sci-Fi" movies
//using filter() to return movies whose genre is Sci-Fi

const sciFiMovies = movies.filter(movie => movie.genre == "Sci-Fi")

console.log("Sci-Fi Movies:\n",sciFiMovies) //printing Sci-Fi movies



//2. map() to return "Inception (8.8)"
//using map() to create new array with movie title and rating

const movieTitles = movies.map(movie => movie.title + " (" + movie.rating + ")")

console.log("Movie titles with rating:\n",movieTitles) //printing new array



//3. reduce() to find average movie rating
//using reduce() to calculate total rating first

const totalRating = movies.reduce((sum,movie)=>{
    return sum + movie.rating
},0)

const averageRating = totalRating / movies.length

console.log("Average Movie Rating:\n",averageRating) //printing average rating



//4. find() movie "Joker"
//using find() to search movie whose title is Joker

const jokerMovie = movies.find(movie => movie.title == "Joker")

console.log("Details of Joker:\n",jokerMovie) //printing movie details



//5. findIndex() of "Avengers"
//using findIndex() to get index of movie whose title is Avengers

const avengersIndex = movies.findIndex(movie => movie.title == "Avengers")

console.log("Index of Avengers:\n",avengersIndex) //printing index