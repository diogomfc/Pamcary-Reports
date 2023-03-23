import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v3/2sDdZG5JnZLfkc1SiE0j.woff2",
  //src:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
});

export const CheckBoxContent = StyleSheet.create({
  ContainerTitle: {
    display: "flex",
    flexDirection: "row",
 
    alignItems: "center",
    
    padding: 5,
    //marginTop: 5,
    //marginBottom: 3,
    // marginLeft: 3,
    // marginRight: 3,

    //marginBottom: -3,
    width: '100%',

    backgroundColor: "#F6F8FB",
    borderRadius: 3,
    border: "0.6px solid #E0E5EA",
  },
  CheckBoxTextTitle: {
    fontSize: 8,
    color: "#7C7C8A",
    fontWeight: "bold",
  
  },
   
  SelectedContainer:{
    borderRadius: 3,
    border: "0.6px solid #E0E5EA",
    backgroundColor: "#FFFFFF",
    padding: 5,
    //marginTop: 5,
    //marginBottom: 3,
    //marginLeft: 3,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 25,
    height: 25,
  },

  CheckBoxTextSelected:{
    
  }

});