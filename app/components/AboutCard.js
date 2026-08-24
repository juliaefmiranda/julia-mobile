import { StyleSheet, Text, View } from "react-native";

export default function AboutCard() {
  return (
    <>
      <View style={styles.divider}>
        <Text style={styles.number}>01</Text>

        <View style={styles.line} />

        <Text style={styles.label}>SOBRE MINHA ÁREA</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Tecnologia com propósito.</Text>

        <Text style={styles.description}>
          Gosto de entender não apenas como uma aplicação funciona, mas também
          como as pessoas irão interagir com ela. Por isso, meu processo envolve
          desenvolvimento, organização visual e atenção aos detalhes.
        </Text>

        <View style={styles.bottom}>
          <View style={styles.focusContent}>
            <Text style={styles.small}>FOCO ATUAL</Text>

            <Text style={styles.focus}>Desenvolvimento Mobile</Text>
          </View>

          <View style={styles.arrowBox}>
            <Text style={styles.arrow}>↗</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 48,
    marginBottom: 18,
  },

  number: {
    fontSize: 10,
    fontWeight: "800",
    color: "#B58A35",
    marginRight: 12,
  },

  line: {
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

  title: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "700",
    color: "#17294D",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#6C7280",
  },

  bottom: {
    marginTop: 24,
    paddingTop: 17,

    borderTopWidth: 1,
    borderTopColor: "#ECE9E3",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  focusContent: {
    flex: 1,
  },

  small: {
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#B58A35",
    marginBottom: 5,
  },

  focus: {
    fontSize: 13,
    fontWeight: "700",
    color: "#17294D",
  },

  arrowBox: {
    width: 39,
    height: 39,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2EFE8",
    marginLeft: 15,
  },

  arrow: {
    fontSize: 18,
    color: "#17294D",
  },
});
