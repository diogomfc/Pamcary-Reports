import { Text, View, Image } from "@react-pdf/renderer";

import { CheckBoxContent } from "./styles";

interface CheckBoxProps {
  Title?: string;
  Selected?: string | undefined; // "Sim" or "Não"
  children?: React.ReactNode;
  justifyContentTitle?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly" | undefined;
  widthContainer?: string | number | undefined;
  TextColor?: string | undefined;
}

const CheckBoxTitle = ({ Title, justifyContentTitle, widthContainer, TextColor }: CheckBoxProps) => (
  <View style={[CheckBoxContent.ContainerTitle,{justifyContent: justifyContentTitle, width: widthContainer }]}>
    <Text style={[CheckBoxContent.CheckBoxTextTitle, {color: TextColor}]}>{Title}</Text>
  </View>
);

const CheckBoxSelected = ({ children }: CheckBoxProps) => (
  <View style={CheckBoxContent.SelectedContainer}>{children}</View>
);

export { CheckBoxTitle, CheckBoxSelected };
