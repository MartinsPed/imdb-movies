import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            const currentScrollPos = window.pageYOffset;

            if(currentScrollPos >= 350) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [isVisible])

    
  return (
    <Container>
        {isVisible && (
            <Scroll
                smooth={true}
                onClick={scrollToTop}>
                <ArrowUpwardIcon/>
            </Scroll>
        )}
        
    </Container>
  )
}

export default ScrollUp

const Container = styled.div`
    position: relative;    
`

const Scroll = styled(Link)`
    &>.MuiSvgIcon-root {
        position: fixed;
        right: 10px;
        bottom: 48px;
        background: var(--primary);
        cursor: pointer;
        width: 35px;
        height: 35px;
        padding: 3px;
        border: 2px solid transparent;
        border-radius: 50%;
        z-index: 99;
        transition: all 0.4s ease-in-out;
        &:hover {
            background: transparent;
            border-color: var(--primary);
            transform: translateY(-10px)
        }
    }
`
