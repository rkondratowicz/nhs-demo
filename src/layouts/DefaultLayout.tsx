import { Container } from "nhsuk-react-components";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export default function DefaultLayout() {
  return (
    <>
      <AppHeader />

      <Container className="nhsuk-u-margin-top-5">
        <Outlet /> {/* This renders the current page */}
      </Container>

      <AppFooter />
    </>
  );
}
