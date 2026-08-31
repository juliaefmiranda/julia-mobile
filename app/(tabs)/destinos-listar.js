import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios"; //lib usada para fazer chamadas HTTP para API
import { SafeAreaView } from "react-native-safe-area-context"; // evita que o conteúdo fique embaixo do notch/ barra do celular

const API_KEY =
  "cv_FTuu3Fs8nTK7yXxbiAXjO4Hmn3sY3wYtAexGcKYu68Ai_H_FX3itFlyOBs3mUtia";

const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function DestinosListarScreen() {
  const [destinos, setDestinos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  async function buscarDestinos() {
    setCarregando(true);
    setErro(null);
    try {
      const resposta = await api.get("/api/destinos", {
        params: { limit: 50 },
      });
      setDestinos(resposta.data.data);
    } catch (error) {
      setErro("Não foi possível carregar os destinos");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarDestinos();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Listar destinos</Text>
          <Text style={styles.subtitulo}>GET /api/destinos</Text>
        </View>

        {carregando && <ActivityIndicator style={{ marginVertical: 16 }} />}

        {erro && <Text style={styles.erro}>{erro}</Text>}

        {!carregando &&
          destinos.map((destino) => (
            <View key={destino.id} style={styles.card}>
              <Image
                source={{
                  uri: `https://api-ds.codeverse.dev.br${destino.imageUrl}`,
                }}
                style={styles.imagem}
              />
              <View style={styles.info}>
                <Text style={styles.titulo}>{destino.title}</Text>
               
                <Text style={styles.detalhes}>
                  {destino.pais} ·  {destino.tipo_destino}
                </Text>
                <Text style={styles.detalhes}>
                 Melhor época: {destino.melhor_epoca}
                </Text>

                <Text style={styles.status}>Custo médio: R${destino.custo_medio}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F5F2",
  },

  conteudo: {
    padding: 24,
    paddingBottom: 48,
  },

  header: {
    marginBottom: 16,
  },

  tituloPagina: {
    fontSize: 24,
    fontWeight: "800",
    color: "#102542",
  },

  subtitulo: {
    fontSize: 14,
    color: "#5f6b7a",
    marginTop: 2,
  },

  erro: {
    color: "#c62828",
    marginTop: 12,
  },

  card: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },

  imagem: {
    width: 100,
    height: 120,
  },

  info: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 12,
    paddingVertical: 12,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#102542"
  },

  detalhes: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 8,
  },

  status: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2596be",
    marginTop: 6,
  },
});
