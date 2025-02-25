import { Header } from "nhsuk-react-components";
import React from "react";

const AppHeader: React.FC = () => {
  return (
    <Header serviceName="McCloud IC">
      <Header.Container>
        <Header.Logo href="/" />
        <Header.Search />
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href="/">Home</Header.NavItem>
        <Header.NavItem href="/enter-data-manually">
          Enter data manually
        </Header.NavItem>
        <Header.NavItem href="/approve-calculation">
          Approve calculations
        </Header.NavItem>
        <Header.NavDropdownMenu />
      </Header.Nav>
    </Header>
  );
};

export default AppHeader;
