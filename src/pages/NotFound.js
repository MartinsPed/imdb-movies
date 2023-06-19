import React from 'react'
import styled from 'styled-components'
import BackToHome from '../components/BackToHome'

const NotFound = () => {
  return (
    <Container>
      <BackToHome/>
      <Image src='/images/404.jpg' alt='Page not found...'/>
    </Container>
  )
}

export default NotFound

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`