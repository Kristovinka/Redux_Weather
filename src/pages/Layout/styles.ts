import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: fit-content;
  background-color: #0720467f;
  color: white;
`;

export const HeaderLogoContainer = styled.div`
  padding: 5px;
  font-size: 24px;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

