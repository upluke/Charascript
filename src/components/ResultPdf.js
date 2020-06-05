import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "cloumn",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>
          In the end, the magnitude-9.0 Tohoku earthquake and subsequent tsunami
          killed more than eighteen thousand people, devastated northeast Japan,
          triggered the meltdown at the Fukushima power plant, and cost an
          estimated two hundred and twenty billion dollars. The shaking earlier
          in the week turned out to be the foreshocks of the largest earthquake
          in the nation’s recorded history. But for Chris Goldfinger, a
          paleoseismologist at Oregon State University and one of the world’s
          leading experts on a little-known fault line, the main quake was
          itself a kind of foreshock: a preview of another earthquake still to
          come.
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default () => {
  return (
    <PDFViewer width={750} height={700}>
      <MyDocument />
    </PDFViewer>
  );
};
