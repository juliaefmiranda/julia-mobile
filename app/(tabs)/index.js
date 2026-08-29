import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Card from "../components/Card";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />

        <View style={styles.topo}>
          <View style={styles.tag}>
            <View style={styles.dot} />

            <Text style={styles.tagTexto}>DESENVOLVEDORA EM FORMAÇÃO</Text>
          </View>

          <Text style={styles.titulo}>Criando experiências</Text>

          <Text style={styles.tituloDestaque}>através da tecnologia.</Text>

          <Text style={styles.descricao}>
            Olá, eu sou Julia. Estou construindo minha jornada no
            desenvolvimento de sistemas, unindo tecnologia, criatividade e
            design para transformar ideias em experiências digitais.
          </Text>

          <Link href="/sobre" asChild>
            <Pressable style={styles.botao}>
              <Text style={styles.tituloBotao}>Me conheça melhor</Text>

              <View style={styles.seta}>
                <Text style={styles.seta}>→</Text>
              </View>
            </Pressable>
          </Link>
        </View>
        <Card
        label="SOBRE MINHA ÁREA"
        titulo="Tecnologia com propósito"
        descricao="Gosto de entender não apenas como uma aplicação funciona, mas também como as pessoas irão interagir com ela. Por isso, meu processo envolve desenvolvimento, organização visual e atenção aos detalhes."
        textoPequeno="FOCO ATUAL"
        foco="Desenvolvimento Mobile"
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

  scrollContent: {
    paddingBottom: 40,
  },

  topo: {
    paddingHorizontal: 24,
    paddingTop: 38,
  },

  tag: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#B58A35",
    marginRight: 9,
  },

  tagTexto: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.7,
    color: "#8A7040",
  },

  titulo: {
    fontSize: 38,
    lineHeight: 43,
    fontWeight: "500",
    color: "#17294D",
    letterSpacing: -0.8,
  },

  tituloDestaque: {
    fontSize: 38,
    lineHeight: 43,
    fontWeight: "800",
    color: "#B58A35",
    letterSpacing: -0.8,
  },

  descricao: {
    marginTop: 22,
    fontSize: 15,
    lineHeight: 24,
    color: "#666D7A",
  },

  botao: {
    width: "100%",
    padding: 15,
    backgroundColor: "#B58A35",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 19,
  },

  tituloBotao: {
    fontSize: 14,
    color: "#e8e5e0",
    fontWeight: "600",
  },

  seta: {
    color: "#e8e5e0",
  }
  
});
