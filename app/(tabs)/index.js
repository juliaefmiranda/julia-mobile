import { Link } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const juliaLogo = require("../../assets/julialogo.png");

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["bottom", "left", "right"]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* LOGO */}
        <View style={styles.logoArea}>
          <Image
            source={juliaLogo}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>

        {/* CONTEÚDO */}
        <View style={styles.content}>
          <Text style={styles.eyebrow}>PORTFÓLIO • 2026</Text>

          {/* TÍTULO */}
          <Text style={styles.title}>
            Olá, eu sou a{" "}
            <Text style={styles.titleHighlight}>Julia</Text>
          </Text>

          {/* CONTAINER */}
          <View style={styles.container}>
            <Text style={styles.description}>
              Desenvolvedora em formação, explorando o universo do
              desenvolvimento mobile e criando projetos que unem
              tecnologia e criatividade.
            </Text>

            {/* ÁREAS */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                O que estou explorando
              </Text>

              <View style={styles.topics}>
                <View style={styles.topic}>
                  <Text style={styles.topicNumber}>01</Text>

                  <Text style={styles.topicText}>
                    Mobile Development
                  </Text>
                </View>

                <View style={styles.topic}>
                  <Text style={styles.topicNumber}>02</Text>

                  <Text style={styles.topicText}>
                    React Native
                  </Text>
                </View>

                <View style={styles.topic}>
                  <Text style={styles.topicNumber}>03</Text>

                  <Text style={styles.topicText}>
                    UI & UX
                  </Text>
                </View>
              </View>
            </View>

            {/* FRASE */}
            <View style={styles.quote}>
              <View style={styles.quoteLine} />

              <Text style={styles.quoteText}>
                Transformando ideias em experiências através do código.
              </Text>
            </View>

          </View>
          {/* BOTÃO */}
            <Link href="/sobre" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Me conheça melhor
                </Text>

                <Text style={styles.arrow}>→</Text>
              </Pressable>
            </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fc",
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  /* LOGO */

  logoArea: {
    width: "100%",
    height: 350,
  },

  logo: {
    width: "100%",
    height: "100%",
  },

  /* CONTEÚDO */

  content: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#b58a35",
    marginBottom: 8,
  },

  /* TÍTULO */

  title: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "800",
    color: "#14264d",
  },

  titleHighlight: {
    color: "#b58a35",
  },

  /* CONTAINER */

  container: {
    marginTop: 22,
    padding: 22,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e8e5de",
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: "#53627a",
  },

  /* ÁREAS */

  section: {
    marginTop: 30,
  },

  sectionTitle: {
    marginBottom: 14,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "#14264d",
  },

  topics: {
    gap: 10,
  },

  topic: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e3dfd4",
    borderRadius: 14,
    backgroundColor: "#fafafa",
  },

  topicNumber: {
    width: 32,
    fontSize: 11,
    fontWeight: "700",
    color: "#b58a35",
  },

  topicText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#14264d",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  /* FRASE */

  quote: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 12,
  },

  quoteLine: {
    width: 4,
    height: 42,
    borderRadius: 4,
    backgroundColor: "#b58a35",
  },

  quoteText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#6b7485",
  },

  /* BOTÃO */

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#14264d",
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ffffff",
  },

  arrow: {
    fontSize: 22,
    fontWeight: "400",
    color: "#ffffff",
  },
});