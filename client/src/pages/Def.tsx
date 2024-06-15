// const React = require('react')
// import react from 'react'
// const Nav = require('./nav')
import { ReactElement } from "react";
import Nav from "./Nav";

function Def({ children } : { children: ReactElement}) {
  return (
    <>
      <div>
        <Nav />
        <main className="container">{children}</main>
      </div>
      <footer className="bg-secondary">
        <div className="text-end text-white container py-3">
          Copyright Me 2023
          {new Date().getFullYear() > 2023
            ? ` - ${new Date().getFullYear()}`
            : ""}
        </div>
      </footer>
    </>
  );
}

// module.exports = Def
export default Def;
