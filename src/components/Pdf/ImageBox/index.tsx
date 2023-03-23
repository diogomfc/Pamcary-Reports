import {View } from "@react-pdf/renderer";

import { ImageBoxContent } from "./styles";

interface ImageBoxProps {
  children?: React.ReactNode;
}

const ImageBox = ({ children }: ImageBoxProps) => (
  <View style={ImageBoxContent.Container}>
     {children}
  </View>
);

export default ImageBox;