import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid rgba(15, 23, 42, 0.05);
  color: #334155;
  padding: 20px 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled(Image)`
  margin: 20px auto;
`;

export const FooterLinkGroup = styled.div`
  margin-top: 50px;
`;

export const FooterLink = styled(Link)`
  color: #334155;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #0ba5e9;
  }
`;
