import { StyleSheet, Font } from "@react-pdf/renderer";


Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v3/2sDdZG5JnZLfkc1SiE0j.woff2",
});


export const TextAreaContainer = StyleSheet.create({
  Container: {
    //padding: 5,
   
    //backgroundColor: "#F6F8FB",
    //borderRadius: 3,
    //border: "0.6px solid #E0E5EA",
  },
  Title: {
    fontSize: 8,
    color: "#7C7C8A",
    fontWeight: "bold",
  },
  TextName: {
    fontSize: 9,
    color: "#121214",
  },
});