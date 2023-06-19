import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import ScrollUp from '../components/ScrollUp'

const HomePage = () => {
    const [searchInput, setSearchInput] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const apiURL = `http://www.omdbapi.com/?apikey=39a903da&s=${searchInput}`
        fetch(apiURL).then((res) => res.json()).then((data) => 
            {
                if(data.Search) {
                    setMovies(data.Search)
                } else {
                    setMovies([])
                }
            }
        )

    }, [searchInput])

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

  return (
    <Container>
        <Head>
            <Title>
                Welcome To DonP Movies
            </Title>
            <SubTitle>
                where you'll find any movie you're looking for...
            </SubTitle>
            <Prompt>
                Ready to find any movie??? Let's go....
            </Prompt>
            <SearchInput type='text' value={searchInput} onChange={handleChange} placeholder='Find your favourite movie...'/>
        </Head>

      
      <MoviesList>
        {movies.map((movie) => (
            <Link key={movie.imdbID} to={`/movies/${movie.imdbID}`}>
                <MovieCard>
                    <MovieBgImg src={movie.Poster} alt={movie.Title}/>
                    <MovieDetails>
                        <MovieTitle>
                            {movie.Title}
                        </MovieTitle>
                        <MovieYear>
                            {movie.Year}
                        </MovieYear>
                        <Button>
                            View Details
                        </Button>
                    </MovieDetails>
                </MovieCard>
            </Link>
        ))}
      </MoviesList>
      <ScrollUp/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
    padding: 150px 50px;
    min-height: 100vh;
    position: relative;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('/images/background.jpg') center center / cover no-repeat fixed;
        z-index: -1;
        opacity: 0.3;
    }

    @media (max-width: 768px) {
        padding-top: 120px
    }
`



const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center
`
const Title = styled.h1`
    font-size: 50px;

    @media (max-width: 768px) {
        font-size: 32px
    }
`
const SubTitle = styled.h3`
    font-style: italic;
    font-size: 24px;
    color: var(--primary);

    @media (max-width: 768px) {
        font-size: 18px
    }
`
const Prompt = styled.p`
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 15px
    }
`
const SearchInput = styled.input`
    border: 2px solid var(--primary);
    outline: none;
    width: 50%;
    height: 50px;
    font-size: 22px;
    color: var(--primary);
    padding: 10px;
    margin: 20px 0;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 80%;
        font-size: 16px
    }
    
`
const MoviesList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr)
    }
    @media (max-width: 520px) {
        grid-template-columns: 1fr
    }
`
const MovieCard = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid #777;
    transition: all .4s ease-in-out;
    position: relative;
    height: 450px;

    &:hover {
        transform: scale(1.05);
        border-color: var(--primary);
    }

    @media (max-width: 1220px) {
        height: 350px;
    }

    @media (max-width: 520px) {
        width: 300px;
        margin: auto
    }
`

const MovieBgImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
    opacity: 0.4;
    transition: transform .4s ease-in-out;
    z-index: -1;

    ${MovieCard}:hover & {
        transform: scale(1.2)
    }
`
const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center
`
const MovieTitle = styled.h3`
    font-weight: bold;
    font-size: 40px;
    position: absolute;
    top: 10%;

    @media (max-width: 1220px) {
        font-size: 24px
    }
`
const MovieYear = styled.p`
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    position: absolute;
    bottom: 70px;
    align-self: center;

    @media (max-width: 768px) {
        font-size: 16px
    }
`
const Button = styled.button`
    border: 1px solid transparent;
    outline: none;
    padding: 8px 12px;
    border-radius: 10px;
    background: var(--primary);
    color: var(--light);
    width: max-content;
    align-self: center;
    transition: all .3s ease-in-out;
    position: absolute;
    bottom: 20px;

    &:hover {
        background: var(--dark);
        border-color: var(--primary);
        cursor: pointer;
        transform: scale(1.15)
    }
`