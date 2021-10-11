import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "./parts/Header";
import About from "./parts/About";
import Skills from "./parts/Skills";
import Portfolio from "./parts/Portfolio";
import Contact from "./parts/Contact";
import Footer from "./parts/Footer";
import Spacer from "./parts/Spacer";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Bob Palmer: Software Developer" />
      <Header />
      <Spacer />
      <About />
      <Spacer />
      <Skills />
      <Spacer />
      <Portfolio />
      <Spacer />
      <Contact />
      <Spacer />
      <Footer />
    </Layout>
  )
}
