import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container, Wrapper, Section, Logo, Link } from './style'
import navbar from '../../utils/navbar'

export const Nav = () => {
    const navigate = useNavigate()
    const logoValue = true;
    return (

        <div>
            <Container>
                <Wrapper>
                    <Section logo={logoValue.toString()} onClick={() => navigate('/home')}>
                        <Logo />
                        <h2>Houzing</h2>
                    </Section>
                    <Section>
                        {
                            navbar.map(({ title, path }, index) => {
                                return (
                                    <Link
                                        className={({ isActive }) => isActive && 'active'}
                                        key={index}
                                        to={path}>
                                        {title}
                                    </Link>
                                )
                            })
                        }

                    </Section>
                    <Section><button>Sigin in</button></Section>

                </Wrapper>
                <Outlet />
            </Container>

        </div>
    )

}

export default Nav