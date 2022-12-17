import styled from "styled-components";
import Link from "next/link";

export const Navbar = styled.nav`
  padding: 16px 0;
  border-bottom: 1px solid #e5e5e9;
`;

export const NavWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.ul`
  padding: 0;
  display: flex;
  gap: 32px;
`;

export const NavLinkGroup = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 32px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const NavLink = styled(Link)`
  color: #334155;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #0ba5e9;
  }
`;

export const Button = styled.button<{ isPrimary?: boolean }>`
  background: ${(props) => (props.isPrimary ? "#4f46e5" : "#f8f8f8")};
  color: ${(props) => (props.isPrimary ? "#fff" : "#334155")};
  border: none;
  border: 1px solid ${(props) => (props.isPrimary ? "transparent" : "#dadada")};
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;

  :hover {
    background: ${(props) => (props.isPrimary ? "#6366f1" : "#fff")};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;
