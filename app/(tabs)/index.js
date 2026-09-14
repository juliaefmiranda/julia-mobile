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

          <Text style={styles.titulo}>Criando experiências</Text>

          <Text style={styles.tituloDestaque}>através da tecnologia.</Text>

          <Text style={styles.descricao}>
            Olá, eu sou Julia. Estou construindo minha jornada no
            desenvolvimento de sistemas, unindo tecnologia, criatividade e
            design para transformar ideias em experiências digitais.
          </Text>
        </View>
        <Card
        label="SOBRE MINHA ÁREA"
        titulo="Tecnologia com propósito"
        descricao="Gosto de entender não apenas como uma aplicação funciona, mas também como as pessoas irão interagir com ela. Por isso, meu processo envolve desenvolvimento, organização visual e atenção aos detalhes."
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
  
});
