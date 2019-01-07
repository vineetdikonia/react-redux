import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = props => ({
  render() {
    return (
      <div className="o-container">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }
});

export default Layout;