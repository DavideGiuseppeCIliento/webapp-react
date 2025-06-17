// # IMPORT OUTLET
import { Outlet } from "react-router-dom";

//  # IMPORT LAYOUT COMPONENT
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";

export default function DefaultFunction() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
