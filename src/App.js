import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes,Link,useNavigate,Navigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { MovieDetail } from './MovieDetail';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { LightMode } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AddMovie } from './AddMovie';
import { AddColor } from './AddColor';
import { MovieList } from './MovieList';
import { UserList } from './UserList';
import { NotFoundPage } from './NotFoundPage';
import { Home } from './Home';
import { useEffect } from 'react';



{/*const INITIAL_MOVIE_LIST=[{name:"Dada",
                           rating:8.5,
                           summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
                           poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                           trailer:"https://www.youtube.com/embed/23mMdgo0prk"},

                           {name:"remo",
                           rating:8.7,
                           summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
                           poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                           trailer:"https://www.youtube.com/embed/GEB4qrrWIgs" 
                          },
                          

                           {name:"super deluxe",
                           rating:7.5,
                           summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
                           poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                           trailer: "https://www.youtube.com/embed/3-Xq_Zz3nPA"
                          },
                           
                           {name:"good night",
                           rating:7.9,
                           summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
                           poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                           trailer:"https://www.youtube.com/embed/eLPePlnFoho" 
                          },
                           

                           {name:"fight club",
                           rating:7.5,
                           summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
                           poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                           trailer:"https://www.youtube.com/embed/oQVhwMYRgFY" },
                           
                           {name:"mankatha",
                           rating:9,
                           summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
                           poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                           trailer:"https://www.youtube.com/embed/vHESM8iR1JE" 
                            }
                          
                          ]*/}

                          

function App() {

  //lifting the state up or lifting from child to parent
 {/*const[movielist,setMovieList]=useState(INITIAL_MOVIE_LIST)*/}

  // const[movielist,setMovieList]=useState([])
  const navigate=useNavigate()
  const[mode,SetMode]=useState("light")

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
//use effect has two arguments callback function and dependency
  // useEffect(()=>{
  //   fetch("https://65d9c8aabcc50200fcdc1afb.mockapi.io/movie")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setMovieList(data);
  //   });
  // },[]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
  
    <div className="App">
    <AppBar position="static">
    <Toolbar>
    <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
    <Button color="inherit" onClick={()=>navigate("/movie")}>MovieList</Button>
    <Button color="inherit" onClick={()=>navigate("/movie/add")}>AddMovie</Button>
    <Button color="inherit" onClick={()=>navigate("/color-game")}>AddColor</Button>
    <Button color="inherit" onClick={()=>navigate("/users")}>Users</Button>
    <Button startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} color="inherit" onClick={()=>SetMode(mode === "light"?"dark":"light")}>
    {mode === "light"?"dark":"light"} Mode </Button>
   
    <nav>
    {/*<ul>
    <li><Link to ="/">Home</Link></li>
    <li><Link to ="/movie">MovieList</Link></li>
    <li><Link to ="/color-game">AddColor</Link></li>
    <li><Link to ="/users">Users</Link></li>
    <li><Link to ="/somewhere">SomeWhere</Link></li>

  </ul>*/}

    </nav>
    </Toolbar>
    </AppBar>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/movie" element={<MovieList/>}/>
         <Route path="/film" element={<Navigate replace to="/movie"/>}/>
         <Route path= "/movie/add" element={<AddMovie /> }/>  
         <Route path="/movie/:movieid" element={<MovieDetail   /> }/>  
         <Route path="/color-game" element={<AddColor/>}/>
         <Route path="/users" element={<UserList/>}/>
         {/*<Route path="*" element={<NotFoundPage/>}/>*/}
         <Route path="/404" element={<NotFoundPage/>}/>
         <Route path="*" element={<Navigate replace to="/404"/>}/>

        
     </Routes>

    
    
    
 
    </div>
    </ThemeProvider>
  );
}


export default App;
