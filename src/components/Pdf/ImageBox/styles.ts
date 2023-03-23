import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v3/2sDdZG5JnZLfkc1SiE0j.woff2",
  //src:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
});

export const ImageBoxContent = StyleSheet.create({
  Container: {
   //bordar pontilhada imagem alinhada no centro
    border: "1px dashed #5FCDCD",
    display: "flex",
    alignItems: "center", 
    justifyContent: "center",
    width: "100%",
    //height: 100,
    padding: 5,
    borderRadius: 3,
  }
});