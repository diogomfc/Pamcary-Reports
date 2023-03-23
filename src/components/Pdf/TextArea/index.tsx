import { Text, View, Image } from "@react-pdf/renderer";

import { TextAreaContainer } from "./styles";

interface TextAreaProps {
  widthContainer?: string | number | undefined;
  heightContainer?: string | number | undefined;
  children: React.ReactNode;
  FontSize?: string | number | undefined;
  ColorTextArea?: string | undefined;
}

const TextArea = ({
  widthContainer,
  heightContainer,
  FontSize,
  ColorTextArea,
  children,
}: TextAreaProps) => (
  <View
    style={[
      TextAreaContainer.Container,
      {
        width: widthContainer,
        height: heightContainer,
        fontSize: FontSize,
        color: ColorTextArea,
        lineHeight: 1.5,
      },
    ]}
  >
    {children}
  </View>
);

export default TextArea;
