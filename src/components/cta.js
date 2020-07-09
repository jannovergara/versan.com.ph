import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

import { COLORS } from "../styles/constants"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Learn more on what's happening in Versan."
    />
    <a
      style={{ textDecoration: "none", color: COLORS.lightWhite, }}
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.facebook.com/versanph"
    >
      <Button>Know More</Button>
    </a>
    
  </div>
)

export default CallToAction
