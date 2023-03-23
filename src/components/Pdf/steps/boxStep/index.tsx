import { Text, View } from "@react-pdf/renderer";
import { BoxContentSteps } from "./styles";

interface BoxStep1Props {
  Title?: string | undefined;
  Icon?: string | JSX.Element;
  children: React.ReactNode;
  BorderBottom?: string | undefined;
  BorderBottomLeftRadius?: string | undefined;
  BorderBottomRightRadius?: string | undefined;
  BorderTop?: string | undefined;
  Wrap?: boolean | undefined;
}

const BoxStep = ({
  Title,
  children,
  Icon,
  BorderBottom,
  BorderBottomLeftRadius,
  BorderBottomRightRadius,
  BorderTop,
  Wrap,
}: BoxStep1Props) => (
  <View style={BoxContentSteps.Container} wrap={Wrap}>
    <View style={BoxContentSteps.ContainerTitle}>
      {!!Icon && <View style={BoxContentSteps.ContainerTitleIcon}>{Icon}</View>}
      {!!Title && (
        <Text style={BoxContentSteps.ContainerTitleText}>{Title}</Text>
      )}
    </View>

    <View
      style={[
        BoxContentSteps.TextContainer,
        {
          borderTop: BorderTop,
          borderBottom: BorderBottom,
          borderBottomLeftRadius: BorderBottomLeftRadius,
          borderBottomRightRadius: BorderBottomRightRadius,
        },
      ]}
    >
      {children}
    </View>
  </View>
);

export default BoxStep;
