import { useNavigate,useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect,useState } from 'react';
import {API} from './global';

export function MovieDetail({}) {
  // const[movielist,setMovieList]=useState([])
  const { movieid } = useParams();
  const[movie,setMovie]=useState({});
  const navigate=useNavigate();
  // const movie = movielist[movieid];
  // console.log(movielist);
  // console.log(movie);
  

  
  
  useEffect(()=>{
    fetch(`https://65d9c8aabcc50200fcdc1afb.mockapi.io/movie/${movieid}`,{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mv)=>{
      setMovie(mv);
    });
  },[]);
  
  return (
 
    <div className='movie-detail-container'>
    <iframe width="100%" height="500" src={movie.trailer} title="youtube video player"></iframe>
    <div className='movie-specs'>
    <h2 className='movie-name'>{movie.name}</h2>
    <p className='movie-rating'>⭐{movie.rating}</p>
    </div>
    <p  className='movie-summary'>{movie.summary}</p>
    {/*<Button onClick={()=>navigate(-1)}>BACK</Button>*/}
    <Button onClick={()=>navigate(-1)} variant="contained" startIcon={<ArrowBackIosIcon />}>
    BACK
    </Button> 
    </div>
    
  
  );
}
