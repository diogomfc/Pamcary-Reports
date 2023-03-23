import { Text, View, Image } from "@react-pdf/renderer";
import { HeadingReport } from "./styles";


interface HeadingProps {
  TextStatus: string;
  children: React.ReactNode;
}


const PdfHeadingReport = ({TextStatus, children }:HeadingProps) => (
  <>
      <View style={HeadingReport.boxStatusReport}>
        <Text>{TextStatus}</Text>
      </View>

      <View style={HeadingReport.content}>
        
        {children}
       
      </View>
    </>
);

export default PdfHeadingReport;
