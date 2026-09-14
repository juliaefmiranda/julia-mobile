import { Image, StyleSheet, Text, View } from "react-native";

const juliaLogo = require("../../assets/julialogo.png");

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={juliaLogo} style={styles.logo} resizeMode="contain" />

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
    left: 15,
    top: 0,
    width: 100,
    height: 105,
  },

  line: {
    position: "absolute",
    left: 130,
    right: 63,
    top: 58,
    height: 1,
    backgroundColor: "#b58a358a",
  },

  year: {
    position: "absolute",
    right: 18,
    top: 51,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.5,
    color: "#b58a35c0",
  },
});
