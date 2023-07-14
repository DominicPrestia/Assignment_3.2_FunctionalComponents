import Genre from "./Genre";
import './CSS/Container.css'

function Container() {



  // Question for instructor, How would you have an array accept any number of Genre objects. For example a database of genre objects and then pass them to an array so that you could display hundreds of movies? 
  let genre1 = {
    gName: "Comedy",
    description: "Movies that make you laugh!",
    movieTitle1: {
      title: "50 First Dates",
      year: "2005"
    },
    movieTitle2: {
      title: "Happy Gilmore",
      year: "1999"
    }
  }

  let genre2 = {
    gName: "Romance",
    description: "Movies that make you cry!",
    movieTitle1: {
      title: "How to Lose a Guy in 10 Days",
      year: "2003"
    },
    movieTitle2: {
      title: "Crazy Stupid Love",
      year: "2011"
    }
  }

//This is an array of genre objects. This will be used in the return section with the array function map() to be looped through
  let gArray = [genre1, genre2]


  return (
    <>
    <div className='marginHeader'>
      <h1>Movie App</h1>
      
       {/* loop through all genre objects and pass them to the Genre componenent */}
      {gArray.map((genres) => {

        return <Genre
          //use the spread operator on the genre object to pass all the object properties to Genre componenet
          {...genres}

        />

      })}
</div>
    </>

  );
}

export default Container;
