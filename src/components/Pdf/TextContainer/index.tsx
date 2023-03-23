
import { Text, View, Image } from "@react-pdf/renderer";

import { TextContainerSheet } from "./styles";



interface TextProps {
  Title?: string;
  TextName: string | undefined;
  widthContainer?: string | number | undefined;
  heightContainer?: string | number | undefined;
  ColorTextName?: string | undefined;
  FontSize?: string | number | undefined;
}


const TextContainer = ({ Title, TextName, widthContainer,heightContainer, ColorTextName, FontSize }: TextProps) => (
  <View style={[TextContainerSheet.Container, { width: widthContainer, height: heightContainer}]}>
  {/* //<View style={TextContainerSheet.Container}> */}
    <Text style={TextContainerSheet.Title}>{Title}</Text>
    <Text style={[TextContainerSheet.TextName,{color: ColorTextName, fontSize: FontSize}]}>{TextName}</Text>
  </View>
);

export default TextContainer;