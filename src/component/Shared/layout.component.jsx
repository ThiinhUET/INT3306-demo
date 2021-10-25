import Header from "./header.component";
import Footer from "./footer.component";
import React from 'react';

import 'bootswatch/dist/lux/bootstrap.css';

export default function Layout({children}) {
  return(
    <>
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  )
}