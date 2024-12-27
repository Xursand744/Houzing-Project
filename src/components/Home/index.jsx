import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Wrapper } from './style'
const Home = () => {
    return (

        <div>
            <Container>
                <Outlet />
                <Wrapper>
                    <h1>Home Textalar</h1>

                </Wrapper>
            </Container>

        </div>
    )

}

export default Home