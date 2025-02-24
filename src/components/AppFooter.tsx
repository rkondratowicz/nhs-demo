import { Footer } from "nhsuk-react-components";
import React from "react";

const AppFooter: React.FC = () => {
  return (
    <>
      <div
        id="restOfThePage"
        style={{
          height: "60vh",
        }}
      />
      <Footer>
        <Footer.List>
          <Footer.ListItem href="https://www.nhs.uk/nhs-sites/">
            NHS sites
          </Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/about-us/">
            About us
          </Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/contact-us/">
            Give us feedback
          </Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/about-us/sitemap/">
            Sitemap
          </Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/our-policies/">
            Our policies
          </Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>© Crown copyright</Footer.Copyright>
      </Footer>
    </>
  );
};

export default AppFooter;
