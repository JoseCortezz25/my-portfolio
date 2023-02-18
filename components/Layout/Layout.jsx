import Head from "next/head";
import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Alfonso 👨‍💻 | Portafolio </title>
      </Head>

      <Header />
      <main className="Main">{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
