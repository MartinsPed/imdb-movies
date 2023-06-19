import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import BackToHome from '../components/BackToHome'

const DetailPage = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    const apiURL = `http://www.omdbapi.com/?apikey=39a903da&i=${id}`
    fetch(apiURL).then((res) => res.json()).then((data) => {
      setMovieDetails(data)
    })
  }, [id])
  return (
    <Container>
      <BackToHome/>
      {movieDetails ? (
        <>
          <Background>
            <Image src={movieDetails.Poster} alt={movieDetails.Title}/>
          </Background>
          <MovieDetail>
          <Title>
            {movieDetails.Title}
          </Title>
          <Genre>
            Genre: <Span>{movieDetails.Genre}</Span>
          </Genre>
          <Director>
            Director: <Span>{movieDetails.Director}</Span>
          </Director>
          <Actors>
            Actors: <Span>{movieDetails.Actors}</Span>
          </Actors>
          <Plot>
            Plot: <Span>{movieDetails.Plot}</Span>
          </Plot>
        </MovieDetail>
        </>
        
      ) : (
        <Loading>
          Loading movie details...
        </Loading>
      )}
    </Container>
  )
}

export default DetailPage

const Container = styled.div`
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.2;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 150px 32px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Title = styled.h1`
  font-size: 50px;
  color: var(--primary)
`

const Genre = styled.p``
const Director = styled.p``
const Actors = styled.p``
const Plot = styled.p`
  line-height: 1.4;
  font-size: 12px;
  padding: 16px 8px;
  margin-top: 26px;
  color: var(--light);
  max-width: 768px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Span = styled.span`
  font-weight: 700;
  font-size: 20px;
  font-style: italic
`
const Loading = styled.p``