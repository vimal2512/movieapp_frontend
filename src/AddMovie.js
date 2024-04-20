import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from "yup"



const movieValidationSchema=yup.object({
  name:yup.string().required("why not fill the name"),
  poster:yup.string().min(4,"need a longer poster").required("why not fill this poster"),
  rating:yup.number().min(0,"need a higher rating").max(10,"to much rating"),
  summary:yup.string().min(20,"need a longer summary").required("why not fill this summary"),
  trailer:yup.string().min(4,"need longer trailer").required("why not fill this trailer")
})

export function AddMovie({ movielist, setMovieList }) {

  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  // const navigate = useNavigate();


 
  const formik=useFormik({
    initialValues:{
      name:"",
      poster:"",
      rating:"",
      summary:"",
      trailer:""
    },
    validationSchema:movieValidationSchema,
    onSubmit:(newMovie)=>{
      createMovie(newMovie)
  }
})

 const navigate=useNavigate()

  const createMovie=(newMovie)=>{
    
    fetch("https://mockapi.io/projects/65d9c8aabcc50200fcdc1afc",{
      method:"POST",
      body:JSON.stringify(newMovie),
      headers:{"content-Type":"application/json"}
    })
    .then((data)=>data.json())
    .then(()=>navigate("/movie"))
  }


  return (

    <div>
      <div className='add-movie-form'>

        <TextField
         variant="standard" 
         label="Name" 
         id="name"
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur}
         value={formik.values.name}
         type="text" 
         placeholder='enter name' />
         {formik.touched.name && formik.errors.name ? formik.errors.name:""}
         <br />

        <TextField
         variant="standard"
         label="Poster"
         id="poster"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.poster}
         type="text" 
         placeholder='enter poster' />
         {formik.touched.poster && formik.errors.poster ? formik.errors.poster:""}
         <br />

        <TextField
         variant="standard"
         label="Rating" 
         id="rating"
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur}
         value={formik.values.rating}
         type="number" 
         placeholder='enter rating' />
         {formik.touched.rating && formik.errors.rating ? formik.errors.rating:""}
         <br />

        <TextField
         variant="standard"
         label="Summary" 
         id="summary"
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur}
         value={formik.values.summary}
         type="text" 
         placeholder='enter summary' />
         {formik.touched.summary && formik.errors.summary ? formik.errors.summary:""}
         <br />

        <TextField 
        variant="standard" 
        label="Trailer"
        id="trailer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.trailer}
        type="text" 
        placeholder='enter trailer' />
        {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer:""}
        <br />

        <Button variant="contained" 
        onClick={createMovie}
        type='submit'
          /*onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };

          setMovieList([...movielist, newMovie]);
          navigate("/movie");
        }}*/>Add Movie</Button>
      </div>
    </div>

  );
}
