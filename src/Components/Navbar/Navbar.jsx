import React from "react";
import styled from "styled-components";
import BasicModal from "./LoginModal";
import styles from "./navbar.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import SignupModal from "./SignupModal";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 14px;
`;

const logoCont = styled.div``;

export default function Navbar() {
  return (
    <Nav className={styled.navComp}>
      <logoCont>
        <img src="./logo.svg" alt="logo-img" />
      </logoCont>
      <div className={styles.linkDiv}>
        <div>
          <LanguageIcon />
        </div>

        <div>
          <BasicModal />
        </div>

        <div>
          <SignupModal />
        </div>
      </div>
    </Nav>
  );
}
