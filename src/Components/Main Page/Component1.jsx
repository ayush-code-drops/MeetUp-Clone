import { Grid } from "@mui/material";
import React from "react";
import styles from "../Navbar/navbar.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Component1() {
  return (
    <Grid
      className={styles.comp1}
      container
      spacing={2}
      sx={{ marginTop: "40px" }}
    >
      <Grid item sm="12" md="4">
        <img src="./category1img1.webp" alt="img" />
        <div className={styles.adiv}>
          <a className={styles.comp1link} href="">
            Make New Friends{" "}
          </a>
          <ArrowRightAltIcon
            sx={{ fontSize: "33px", marginLeft: "7px", color: "#008294" }}
            size="large"
          />
        </div>
      </Grid>
      <Grid item sm="12" md="4">
        <img src="./category1img2.webp" alt="img" />
        <div className={styles.adiv}>
          <a className={styles.comp1link} href="">
            Explore the outdoors{" "}
          </a>
          <ArrowRightAltIcon
            sx={{ fontSize: "33px", marginLeft: "7px", color: "#008294" }}
            size="large"
          />
        </div>
      </Grid>
      <Grid item sm="12" md="4">
        <img src="./category1img3.webp" alt="img" />
        <div className={styles.adiv}>
          <a className={styles.comp1link} href="">
            Connect over tech{" "}
          </a>
          <ArrowRightAltIcon
            sx={{ fontSize: "33px", marginLeft: "7px", color: "#008294" }}
            size="large"
          />
        </div>
      </Grid>
    </Grid>
  );
}
