import React  from 'react'
//import Moviedetails from './movie-details';
import { useEffect, useState, useContext }  from 'react'
import './movieDetails.css';import { faCirclePlay, faTicket,faListUl} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, NavLink } from 'react-router-dom'
import noimage from '../assets/movies.jpg'

import Menu from './menu'
import Star from '../assets/Star.png'
export const Filmdetails = ({media}) => {
   const { id } = useParams()
const APIKEY ='3d820eab8fd533d2fd7e1514e86292ea';
  const [moviedet, setMoviedet] = useState([]);
  const [castdata, setCastdata] = useState([]);
  const [moviegenres, setMoviegenres] = useState([]);
  const [video, setVideo] = useState([]);
function toHoursAndMinutes(totalMinutes) {
  const minute = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}hr ${padTo2Digits(minute)}min`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=${APIKEY}&language=en-US`
    );
    const moviedetail = await data.json();
    setMoviedet(moviedetail);
    // console.log(moviedetail);
    setMoviegenres(moviedetail.genres);
   
  };

  const fetchCast = async () => {
    const castdata = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${APIKEY}&language`
    );
    const castdetail = await castdata.json();
    setCastdata(castdetail.cast);
   
  }

  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${APIKEY}&language=en-US`
    );
    const videodata = await data.json();
    setVideo(videodata.results);
    // console.log(videodata.results);
  }

  useEffect(() => {
    fetchMovie();
    fetchCast();
    fetchVideo();
  }, []);

  
  

  return (

    <div className=''>
     <Menu />
          <div className='cont'>
         <div alt='poster' className='moviePosters' style={{backgroundImage: `url(${moviedet.backdrop_path === null ? noimage :"https://image.tmdb.org/t/p/original/" + moviedet.backdrop_path} )`,borderRadius:20}} >
      {Array.from(video).filter(trail => trail.type === "Trailer").map((trail, index) => (
       <>
                    <>  <a key={trail.id} href={'https://www.youtube.com/watch?v=' + trail.key} target="_blank" className='d-flex' >
                       
        <div className='playButton'><FontAwesomeIcon icon={faCirclePlay} size="lg" style={{color:"white",marginTop:"5px",verticalAlign:"middle"}}/><p style={{color:"white",cursor:'pointer'}}>Watch Trailer</p></div>
</a>    </>
                </>
              ))
              }
</div>
       
    <div class="grid-container">
         <div className='movieTitle'data-testid="movie-card">
   
      {moviedet?.title || moviedet?.name || moviedet?.original_name} <p data-testid="movie-runtime">{ toHoursAndMinutes(moviedet?.runtime)}</p>
      <div className='flex justify-center d-flex flex-row g-2'>
              {moviegenres.map((tag) => (
                <>
                  <div key={tag.id} className='text-black button '>{tag.name}</div>
                 </>
              ))}
            </div>
    </div>
        
     <div className='movieRatings'>
      <img src={Star} width={30} height={30} />{moviedet?.vote_average}
    </div>
        <div className='movieDesc'data-testid="movie-overview">
      {moviedet.overview}
    </div>
     <div className='movieShowtimes'>
      <div className='seeTimes'>
        <p className='seeTimesText'><FontAwesomeIcon icon={faTicket} style={{marginTop:"5px",verticalAlign:"middle"}} /> &nbsp;See ShowTimes</p>
      </div>
       <div className='seeTime'>
        <p className='seeTimeText'><FontAwesomeIcon icon={faListUl} style={{marginTop:"5px",verticalAlign:"middle"}}/>&nbsp;More Watch options</p>
      </div>
    </div>
     <div className='movieCast'>
      <p className='castmembers'> Directors:</p>
      <p className='castmembers'>Writers:</p>
      <p className='castmembers'>Stars:</p>
        <div className="md:px-5 d-flex flex-column my-5 ">
                {castdata.map((cast) => (
                  <>
                    {cast.profile_path !== null ? <>
                      <div className=''>
                        <p className='text-black'>{cast.name}</p>
                      
                      </div>
                    </> : null}
                  </>
                ))}
              </div>
    </div>
     <div className='movieRelated'>
      
    </div>
    </div>
    </div> </div>
  )
}

export default Filmdetails