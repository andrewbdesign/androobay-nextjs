import * as React from "react";
import Nav from "../nav";
import Footer from "../footer";
import { Wrapper } from "./styled";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}
