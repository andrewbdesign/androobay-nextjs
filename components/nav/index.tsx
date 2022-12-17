import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavWrapper,
  NavLinks,
  ListItem,
  NavLink,
  Button,
  NavLinkGroup,
  ButtonGroup,
} from "./styled";

type Route = {
  id: string;
  name: string;
  url: string;
};

export default function Nav() {
  const routes: Route[] = [
    {
      id: "1",
      name: "Blog",
      url: "/blog",
    },
    {
      id: "2",
      name: "About",
      url: "/about",
    },
    {
      id: "3",
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <Navbar>
      <NavWrapper>
        <NavLinkGroup>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={140}
              height={34}
              priority
            />
          </Link>
          <div>
            <NavLinks>
              {routes.map(({ id, name, url }) => {
                return (
                  <ListItem key={id}>
                    <NavLink href={url}>{name}</NavLink>
                  </ListItem>
                );
              })}
            </NavLinks>
          </div>
        </NavLinkGroup>
        <ButtonGroup>
          <Button>Login</Button>
          <Button isPrimary>Sign up to Facebook</Button>
        </ButtonGroup>
      </NavWrapper>
    </Navbar>
  );
}
