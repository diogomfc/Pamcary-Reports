import styled from "styled-components";
import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v3/2sDdZG5JnZLfkc1SiE0j.woff2",
  //src:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
});


export const HeaderPdfReport = StyleSheet.create({
  imgBackground: {
    width: "100%",
    //height: "100%",

    position: "relative",
    top: 0,
    left: 0,
    zIndex: -1,
  },

  content: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    position: "absolute",
    top: 25,
    left: 20,
    width: 180,
    height: 47,
  },
  subTitle:{
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },

  textLeft: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "light",
  },

  logo: {
    width: "138",
  },

  contentRight: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 3,
    top: 25,
    right: 20,
    width: 200,
  },
  textRight: {
    fontSize: 8,
    color: "#000000",
    fontWeight: "bold",
  },
});