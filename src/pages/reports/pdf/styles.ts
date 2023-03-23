import { Header } from "@components/Header";
import styled from "styled-components";
import { StyleSheet, Font } from "@react-pdf/renderer";
import { Columns } from "phosphor-react";
import { Separator } from "@radix-ui/react-select";

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 11rem;
  //border: 3px solid blue;
`;

export const Content = StyleSheet.create({
  pdfViewer: {
    width: "100%",
    height: "100vh",
    border: "1px solid #0078BE",
    boxShadow: "0px 0px 10px 0px #0078BE",
  },
  body: {
    paddingTop: 10,
    paddingBottom: 65,
    paddingHorizontal: 0,
    //margin: 12
  },
  pageNumber: {
    position: "absolute",
    fontSize: 9,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export const BoxContentSteps = StyleSheet.create({
  Row: {
    display: "flex",
    flexDirection: "row",
    //justifyContent: "space-between",
    
    gap: 3,
    paddingBottom: 3,
  },
  Column: {
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-between",
   
    gap: 3,
    paddingBottom: 3,
  },
  Line: {
    borderBottom: "1px dashed #5FCDCD",
    width: "100%",
    height: "1px",
    marginBottom: "3px",
  },

  //Linha vertical pontilhada
  LineVertical: {
    borderLeft: "1px solid #F1F5F8",
    width: "1px",
    height: "90%",
    marginBottom: "5px",
    //marginTop: "5px",
 
  },


  BoxLine: {
    display: "flex",
    flexDirection: "row",

    //paddingTop: 5,
    //marginBottom: 3,

    border: "1px dashed #5FCDCD",
    //width: "100%",
    //height: "100%",


  },

  BoxSubTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5FCDCD",
    padding: 3,

    fontSize: 8,
    color: "#FFFFFF",

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    width: "100%",

  },

});
