import { Outlet } from "react-router-dom";
import Header from "../components/important/Header";

export default function PublicLayout () {
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}