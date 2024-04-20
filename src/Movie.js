import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from './Counter';



export function Movie({ movie, id }) {
  // const movie={
  //   name:"Dada",
  //   rating:8.5,
  //   summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
  //   poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",

  // };
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const summaryStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className='movie-container'>
      <img className='movie-poster' src={movie.poster} alt={movie.name} />
      <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}-{id}</h2>
        <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
      </div>
      <IconButton onClick={() => setShow(!show)} aria-label="like-btn" color="primary">{show ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>

      {/*<button onClick={()=>setShow(!show)}>Toggle description</button>*/}
      <IconButton onClick={() => navigate("/movie/" + id)} aria-label="info" color="primary"><InfoIcon /></IconButton>

      <p style={summaryStyles} className='movie-summary'>{movie.summary}</p>

      <Counter />

    </div>

  );
}
