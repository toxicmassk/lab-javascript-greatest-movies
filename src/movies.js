// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);
 const testArr = [
  {
    title: 'Barry Lyndon',
    year: 1975,
    director: 'Stanley Kubrick',
    duration: '3h 4min',
    genre: ['Adventure', 'Drama', 'History', 'War'],
    score: 8.1
  },
  {
    title: 'The Bourne Ultimatum',
    year: 2007,
    director: 'Paul Greengrass',
    duration: '1h 55min',
    genre: ['Action', 'Mystery', 'Thriller'],
    score: 8.1
  },
  {
    title: 'The Wizard of Oz',
    year: 1939,
    director: 'Victor Fleming',
    duration: '1h 42min',
    genre: ['Adventure', 'Family', 'Fantasy', 'Musical'],
    score: 8.1
  },
  {
    title: 'Groundhog Day',
    year: 1993,
    director: 'Harold Ramis',
    duration: '1h 41min',
    genre: ['Comedy', 'Fantasy', 'Romance'],
    score: 8
  },
  {
    title: 'La haine',
    year: 1995,
    director: 'Mathieu Kassovitz',
    duration: '1h 38min',
    genre: ['Crime', 'Drama'],
    score: 8.1
  },
  {
    title: '8½',
    year: 1963,
    director: 'Federico Fellini',
    duration: '2h 18min',
    genre: ['Drama'],
    score: 8.1
  },
  {
    title: 'Jaws',
    year: 1975,
    director: 'Steven Spielberg',
    duration: '2h 4min',
    genre: ['Adventure', 'Drama', 'Thriller'],
    score: 8
  },
 ];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
const directorsArr = movies.map(movie => movie.director)
return directorsArr
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
 let filterMovies = movies.filter(function(movie){
   if (movie.director === 'Steven Spielberg' && movie.genre.includes ('Drama')){
 return true
   }
 })
 return filterMovies.length
};


//howManyMovies(testArr);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0
  }
  let sumScore = movies.reduce((accumulator, currentElement) => {
    if(currentElement.score){
    return currentElement.score + accumulator
  }else{
    return accumulator
  }
 },0)
return Number((sumScore/ movies.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let sumDrama = movies.filter(function(movie){
    return movie.genre.includes ('Drama')
  })
  averageScore = scoresAverage(sumDrama)
  return averageScore
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
