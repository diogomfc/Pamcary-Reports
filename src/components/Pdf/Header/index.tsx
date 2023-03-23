import { Text, View, Image } from "@react-pdf/renderer";

import { HeaderPdfReport } from "./styles";

const PdfHeaderReport = () => (
  <View style={HeaderPdfReport.imgBackground}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        fontSize: 5,
        marginTop: 5,
        marginRight: 10,
      }}
    >
      <Text style={{ color: "#7C7C8A" }}>DATA-HORA DE EMISSÃO: </Text>
      <Text>
        {" "}
        {new Date().toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }) +
          " - " +
          new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
      </Text>
    </View>

    <Image src={"/img/HeaderPDFbg.png"} />

    <View style={HeaderPdfReport.content}>
      <View style={HeaderPdfReport.contentLeft}>
        <Image style={HeaderPdfReport.logo} src="/img/LOGO_PAMCARY2.png" />
        <View style={HeaderPdfReport.subTitle}>
          <Text style={[HeaderPdfReport.textLeft, { color: "#625E5F" }]}>
            Relatório
          </Text>
          <Text style={HeaderPdfReport.textLeft}>de averiguação</Text>
        </View>
      </View>

      <View style={HeaderPdfReport.contentRight}>
        <Text style={HeaderPdfReport.textRight}>
          GPS LOGISTICA E GERENCIAMENTO DE RISCOS S/A
        </Text>
        <Text style={HeaderPdfReport.textRight}>CNPJ: 01.000.786/0001-00 </Text>
        <Text style={HeaderPdfReport.textRight}>
          comercial@gps-pamcary.com.br
        </Text>
        <Text style={HeaderPdfReport.textRight}>
          (11) 3889-1111 / (11) 94180-8187
        </Text>
      </View>
    </View>
  </View>
);

export default PdfHeaderReport;
