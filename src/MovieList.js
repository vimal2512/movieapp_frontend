import { Movie } from './Movie';
import { useEffect,useState } from 'react';
import {API} from './global.js';

export function MovieList() {
  // const movielist=INITIAL_MOVIE_LIST
  const[movielist,setMovieList]=useState([])

  // useEffect(()=>{
  //   fetch("https://65d9c8aabcc50200fcdc1afb.mockapi.io/movie",{
  //     method:"GET",
  //   })
  //   .then((data)=>data.json())
  //   .then((mvl)=>{
  //     setMovieList(mvl);
  //   });
  // },[]);

  useEffect(()=>{
    fetch(`${API}/movie`,{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mvl)=>{
      setMovieList(mvl);
    });
  },[]);
  return (

    <div>
      <div className='movie-list'>
        {movielist.map((ml, index) => (<Movie key={index} movie={ml} id={index} />))}
      </div>
    </div>


  );
}
