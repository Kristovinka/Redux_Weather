import { useNavigate } from "react-router-dom"

import { LayoutProps } from "./types"
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  NavContainer,
  Main,
  StyledNavLink,
} from "./styles"

import BackgroundImg from '../../assets/background.jpg';

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
  
  <LayoutWrapper  style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
        Weather App
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/history"
          >
            History
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
