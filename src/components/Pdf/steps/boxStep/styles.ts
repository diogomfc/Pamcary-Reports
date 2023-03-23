import { StyleSheet, Font } from "@react-pdf/renderer";


Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v3/2sDdZG5JnZLfkc1SiE0j.woff2",
});


export const BoxContentSteps = StyleSheet.create({
  Container: {
    
  },
  ContainerTitle: {
    display: "flex",
    // position: "relative",
    // top: -33,
    // left: -10.9,

    flexDirection: "row",
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,

  },
  ContainerTitleText: {
    backgroundColor: "#014496",

    padding: 5,
    

    fontSize: 9,
    color: "#FFFFFF",
  
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  ContainerTitleIcon: {
    //backgroundColor: "#014496",
    padding: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  TextContainer: {
    position: "relative",
    top: -1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 2,

    border: "0.6px solid #014496",
    borderTop: "2px solid #014496",

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
});