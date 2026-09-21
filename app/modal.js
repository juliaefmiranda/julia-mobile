import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>SOBRE MIM</Text>
        <Text style={styles.subtitle}>Olá, eu sou a Julia Erlo!</Text>
        <Text style={styles.description}>
          Sou estudante de Desenvolvimento de Sistemas e estou me formando
          na área de tecnologia. Gosto de criar projetos, explorar novas
          ideias e transformar criatividade em experiências digitais.
        </Text>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Minha área</Text>
          <Text style={styles.infoText}>Desenvolvimento de Sistemas - DS</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Interesses</Text>
          <Text style={styles.infoText}>Tecnologia • Leitura • Dança • Front-end</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F5F2",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start",
    gap: 18,
  },
  title: {
    fontSize: 13,
    letterSpacing: 1.7,
    fontWeight: "700",
    color: "#B58A35",
  },
  subtitle: {
    fontSize: 30,
    letterSpacing: 1.7,
    fontWeight: "800",
    color: "#17294D",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#17294D",
  },
  info: {
    padding: 17,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    borderColor: "#B58A35",
    shadowColor: "#17294D",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.045,
    shadowRadius: 15,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#17294D",
    paddingBottom: 6,
  },
  infoText: {
    fontSize: 15,
    color: "#17294D",
  },
});
