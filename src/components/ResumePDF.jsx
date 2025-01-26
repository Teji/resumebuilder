import React from "react";
import { Page, Text, View, Document, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  text: { fontSize: 12, marginBottom: 5 },
});

const ResumePDF = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{data.name}</Text>
        <Text style={styles.text}>{data.email} | {data.phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Summary</Text>
        <Text style={styles.text}>{data.summary}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Work Experience</Text>
        <Text style={styles.text}>{data.experience}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text style={styles.text}>{data.education}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <Text style={styles.text}>{data.skills}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
