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
  header: {
    fontSize: 20,
    fontWeight: 900,
  },
  headLine: {
    fontSize: 30,
    color: "grey",
    fontWeight: 900,
    marginBottom: 15,
  },
  midHeader: {
    fontSize: 16,
    color: "red",
  },
  subHeader: {
    fontSize: 12,
  },
  rightAnswer: {
    fontSize: 12,
    color: "blue",
    fontWeight: 900,
  },
  wrongAnswer: {
    fontSize: 12,
    color: "red",
    fontWeight: 900,
  },
  answerCard: {
    margin: 0,
    padding: 0,
  },
});

const Divider = ({ size }) => {
  return size === "big" ? (
    <Text>===================================</Text>
  ) : (
    <Text>
      ......................................................................
    </Text>
  );
};

const ResultDetailCard = ({ el }) => {
  return (
    <View style={styles.answerCard}>
      <Divider />
      {el.checking ? (
        <Text
          style={styles.rightAnswer}
        >{`Correct - Character:${el.character}`}</Text>
      ) : (
        <Text
          style={styles.wrongAnswer}
        >{`Wrong - Character:${el.character}`}</Text>
      )}
      <Text style={styles.subHeader}>{`Profile: ${el.profile}`}</Text>
    </View>
  );
};

export default ({ userInfo, result, resultTimeStamp, resultMessage }) => {
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.headLine}>Charascript Test Result</Text>
          <Text
            style={styles.header}
          >{`Name:${userInfo.userName} Email:${userInfo.userEmail}`}</Text>
          <Text
            style={styles.subHeader}
          >{`Result generated at: ${resultTimeStamp}`}</Text>
          <Divider size={"big"} />
          <Text style={styles.midHeader}>{`Result: ${resultMessage}`}</Text>
          <Divider size={"big"} />
          <Text style={styles.header}>
             Test detail is shown below:
          </Text>
          {result?.profilesWithChecking?.map((el) => {
            return <ResultDetailCard el={el} />;
          })}
        </View>
      </Page>
    </Document>
  );
  return (
    <PDFViewer width={750} height={700}>
      <MyDocument />
    </PDFViewer>
  );
};
