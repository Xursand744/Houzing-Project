import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as logoImg } from "../../assets/navHeader/logo.svg"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:var(--colorPrimary);
  `;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: var(--padding);
    height: 64px;
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    font-size: 16px;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    cursor: ${({ logo }) => (logo ? 'pointer' : 'default')};
    .active{
        color: #b8ff06;
    }
 `;
const Logo = styled(logoImg)`
    width: 30px;
    margin-right: 12px;
    &path{
        fill:#fff;
    }
 `;
const Link = styled(NavLink)`
    text-decoration: none;
    color: white;
    padding: 0 32px;
`;

export { Container, Wrapper, Section, Logo, Link, Main }