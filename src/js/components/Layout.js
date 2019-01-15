import React from 'react';
import Header from "./includes/header.jsx";
import LeftSidebar from "./includes/LeftSidebar.jsx";
import Footer from "./includes/Footer.jsx";

const Layout = props => ({
  render() {
    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
        <Header />
        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
          <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn"><i className="la la-close"></i></button>
          <LeftSidebar />
          {props.children}
        </div>
        <Footer />
      </div>
    );
  }
});

export default Layout;