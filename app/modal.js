import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./components/Card";

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>SOBRE MIM</Text>
        <Text style={styles.subtitle}>Olá, eu sou a Julia Erlo!</Text>
        <Text style={styles.description}>
          Sou estudante de Desenvolvimento de Sistemas e estou me formando
          na área de tecnologia. Gosto de criar projetos, explorar novas
          ideias e transformar criatividade em experiências digitais.
        </Text>

        <Card
          label=" MINHA ÁREA"
          titulo="Desenvolvimento de Sistemas"
          descricao="Curso oferecido pelo SENAI Valinhos, que ao longo dos 2 anos de curso, contempla matérias como Sistemas Operacionais, Lógica de Programação, Back-end, Banco de Dados, Desenvolvimento Mobile, entre muitas outras!"
        />
        <Card
          label="MEUS INTERESSES"
          titulo="Tecnologia • Leitura • Dança • Front-end"
          descricao="Curso oferecido pelo SENAI Valinhos, que ao longo dos 2 anos de curso, contempla matérias como Sistemas Operacionais, Lógica de Programação, Back-end, Banco de Dados, Desenvolvimento Mobile, entre muitas outras!"
        />
      </ScrollView>
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
    paddingTop: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#17294D",
    paddingTop: 15,
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
