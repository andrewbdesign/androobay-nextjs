import {
  Footer,
  FooterWrapper,
  FooterLinkGroup,
  FooterLink,
  ImageWrapper,
} from "./styled";

export default function FooterComponent() {
  return (
    <Footer>
      <FooterWrapper>
        {/* <ImageWrapper src="/logo.svg" alt="logo" width={140} height={34} /> */}
        <p>Made by andrewbdesign.com</p>
        <FooterLinkGroup>
          <FooterLink href="#">Privacy policy</FooterLink>
          {" | "}
          <FooterLink href="#">Changelog</FooterLink>
        </FooterLinkGroup>
      </FooterWrapper>
    </Footer>
  );
}
