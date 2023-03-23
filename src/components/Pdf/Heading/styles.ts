import styled from "styled-components";
import { StyleSheet, Font } from "@react-pdf/renderer";


Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v3/2sDdZG5JnZLfkc1SiE0j.woff2",
});


export const HeadingReport = StyleSheet.create({
  
  boxStatusReport: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F15858",
    padding: 5,

    fontSize: 9,
    color: "#FFFFFF",
  },
   
  
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
   
    gap: 3,

    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
   
  },

});
