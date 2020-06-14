import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

import { COLORS } from "../styles/constants"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Versan Cheesecakes</h1>
    <p style={{ textAlign: "center", maxWidth: 640 }}>
      We all love cheesecakes! Versan offers the best cheesecakes in town. Cheesecakes are filled in a 200mL glass jar. Browse our shop to choose the most satisfying cheesecake/s for you!
    </p>
    <a
      style={{ textDecoration: "none", color: COLORS.lightWhite, }}
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.facebook.com/versanph/shop/"
    >
      <Button>
        Know more
      </Button>
    </a>
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div
        style={{ clipPath: "inset(2% 5% round 2% 5%)" }}
      >
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img
          src={mockupFrame}
          alt="cheesecakes"
        />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
