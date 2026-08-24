import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import AboutCard from "../components/AboutCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />

        <View style={styles.hero}>
          <View style={styles.tag}>
            <View style={styles.dot} />

            <Text style={styles.tagText}>DESENVOLVEDORA EM FORMAÇÃO</Text>
          </View>

          <Text style={styles.title}>Criando experiências</Text>

          <Text style={styles.titleAccent}>através da tecnologia.</Text>

          <Text style={styles.description}>
            Olá, eu sou Julia. Estou construindo minha jornada no
            desenvolvimento de sistemas, unindo tecnologia, criatividade e
            design para transformar ideias em experiências digitais.
          </Text>

          <Link href="/sobre" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonTitle}>Sobre mim</Text>

              <View style={styles.buttonArrow}>
                <Text style={styles.arrow}>→</Text>
              </View>
            </Pressable>
          </Link>
        </View>

        <AboutCard />
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

  hero: {
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

  tagText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.7,
    color: "#8A7040",
  },

  title: {
    fontSize: 38,
    lineHeight: 43,
    fontWeight: "500",
    color: "#17294D",
    letterSpacing: -0.8,
  },

  titleAccent: {
    fontSize: 38,
    lineHeight: 43,
    fontWeight: "800",
    color: "#B58A35",
    letterSpacing: -0.8,
  },

  description: {
    marginTop: 22,
    fontSize: 15,
    lineHeight: 24,
    color: "#666D7A",
  },

  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F6F5F2",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#B58A35",
    borderWidth: 1,
    marginTop: 19,
  },

  buttonTitle: {
    fontSize: 14,
    color: "#916c23",
    fontWeight: "600",
  },

  
});
