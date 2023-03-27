import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
      <Container>
        <HeaderLeft>
            <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
            <Link to='/movies/popular'><span>Popular</span></Link>
            <Link to='/movies/top_rated'><span>Top Rated</span></Link>
            <Link to='/movies/upcoming'><span>UpComing</span></Link>
        </HeaderLeft>
      </Container>   
  )
}

export default Header

const Container = styled.div`
 display:flex;
 justify-content:space-between;
 widht:100vw;
 align-items:center;
 padding:0.5rem 0;
 margin:0 2.5rem;
`

const HeaderLeft = styled.div`
display:flex;
align-items:center;
span{
  margin:0 30px;
  font-size:1.3rem;
  cursor:pointer;
  color:white;
  &:hover{
   color:red;
  }
}
img{
  width:80px;
  cursor:pointer;
}
`
