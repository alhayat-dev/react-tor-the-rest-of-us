import React from "react"
import ReactDom from "react-dom"

// My Components

import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeGuest from "./components/HomeGuest"
import About from "./components/About"
import Terms from "./components/Terms"

function Main() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  )
}

ReactDom.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
