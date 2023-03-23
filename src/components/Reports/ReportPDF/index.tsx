import { useRouter } from "next/router";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useOnSnapshotReportsId } from "@hooks/useFirebase/useOnSnapshotReportsId";

import { IReportsV2 } from "src/@types/typesReport";

//import { Container } from "./styles";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function PdfReportPDF() {
  return (
    //Generate PDF do report com todos os dados
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}
