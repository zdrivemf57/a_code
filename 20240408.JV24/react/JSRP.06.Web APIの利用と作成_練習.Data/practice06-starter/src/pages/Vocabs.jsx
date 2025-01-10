import { Outlet } from "react-router-dom";

export default function Vocabs() {
  return (
    <>
      <h2 className="mb-3">My Vocabs</h2>
      <Outlet />
    </>
  );
}
