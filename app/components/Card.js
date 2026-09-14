import { StyleSheet, Text, View } from "react-native";

export default function Card({label, titulo, descricao}) {
  return (
    <>
      <View style={styles.divisor}>
        <View style={styles.linha} />
        <Text style={styles.label}>{label}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>{titulo}</Text>

        <Text style={styles.descricao}>{descricao}</Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  divisor: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 48,
    marginBottom: 18,
  },

  linha: {
    width: 35,
    height: 1,
    backgroundColor: "#B58A35",
    marginRight: 12,
  },

  label: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.7,
    color: "#858078",
  },

  card: {
    marginHorizontal: 24,
    padding: 23,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7E4DD",
    shadowColor: "#17294D",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.045,
    shadowRadius: 15,
    elevation: 2,
  },

  titulo: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "700",
    color: "#17294D",
    marginBottom: 12,
  },

  descricao: {
    fontSize: 14,
    lineHeight: 22,
    color: "#6C7280",
  },
});
