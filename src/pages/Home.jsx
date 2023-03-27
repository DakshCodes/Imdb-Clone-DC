import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MovieList from '../components/MovieList'

const Home = () => {
  const [PopularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then(res => res.json()).then(data => setPopularMovies(data.results))
  }, [])

  return (
    <Poster>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {
          PopularMovies.map(movie => {
            return (
              <Link style={{ color: 'white' }} to='/movie.${movie.id}'>
                <Posterimg>
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </Posterimg>
                <Posteroverlay>
                  <div className='poster_title'>{movie ? movie.original_title : ''}</div>
                  <div className="poster_runtime">
                    {movie ? movie.release_date : ''}
                    <span>
                      {movie ? movie.vote_average : ''}
                      <i className='fas fa-star' />{''}
                    </span>
                  </div>
                  <div className='poster_description'>{movie ? movie.overview : ""}</div>
                </Posteroverlay>
              </Link>
            )
          })
        }

      </Carousel>
      <MovieList />
    </Poster>

  )
}

export default Home

const Poster = styled.div`


`
const Posterimg = styled.div`
height: 600px;
img{
  margin: auto;
  display: block;
  width: 100%;
}
`
const Posteroverlay = styled.div`
position: absolute;
padding: 5rem;
bottom: 0px;
height: 70%;
display: flex;
flex-direction: column;
width: 100%;
justify-content: flex-end;
align-items: flex-start;
background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
opacity: 1;
transition: opacity .3s;
.poster_title{
  font-weight: 900;
  font-size: 4rem;
  margin-bottom: 0.4rem;
  text-align: left;
}
.poster_runtime{
  font-size: 2rem;
  margin-bottom: 1rem;
  span{
    margin-left: 3rem;
  }
}
.poster_description{
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  display: flex;
  text-align: left;
  width: 50%;
}

&:hover{
  opacity:1;
}

`