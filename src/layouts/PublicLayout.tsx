import { Outlet } from "react-router-dom";
import Header from "../components/important/Header";
import Footer from "../components/important/Footer";

export default function PublicLayout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}