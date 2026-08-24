import { Image, StyleSheet, Text, View } from "react-native";

const juliaLogo = require("../../assets/julialogo.png");

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={juliaLogo}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.line} />

      <Text style={styles.year}>2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 105,
    position: "relative",
  },

  logo: {
    position: "absolute",
    left: -30,
    top: 0,
    width: 210,
    height: 105,
  },

  line: {
    position: "absolute",
    left: 180,
    right: 55,
    top: 52,
    height: 1,
    backgroundColor: "#DCD9D2",
  },

  year: {
    position: "absolute",
    right: 18,
    top: 46,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.5,
    color: "#8B877F",
  },
});