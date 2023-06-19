import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const BackToHome = () => {
  return (
    <Container>
        <NavLink to='/'>
            <Icon>
                <HomeIcon/>
                Home
            </Icon>
        </NavLink>
    </Container>
  )
}

export default BackToHome

const Container = styled.div`
    display: flex;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 3;
    padding-top: 20px;

    @media (max-width: 520px) {
        left: 10px
    }
`

const NavLink = styled(Link)`
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 8px;
    background: var(--primary);
    font-weight: bold;
    border-radius: 10px;
    border: 2px solid transparent;
    transition: all .3s ease-in-out;

    &:hover {
        background: var(--dark);
        border-color: var(--primary);
        transform: scale(0.8)
    }

    @media (max-width: 520px) {
        gap: 2px;
        padding: 4px
    }
`