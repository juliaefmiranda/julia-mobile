import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const API_KEY = "cv_FTuu3Fs8nTK7yXxbiAXjO4Hmn3sY3wYtAexGcKYu68Ai_H_FX3itFlyOBs3mUtia";

const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function DestinosExcluirScreen() {
  const [destinos, setDestinos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [excluindoId, setExcluindoId] = useState(null);

  async function buscarDestinos() {
    setCarregando(true);
    setErro(null);
    try {
      const resposta = await api.get("/api/destinos", {
        params: { limit: 50 },
      });
      setDestinos(resposta.data.data);
    } catch (e) {
      setErro("Não foi possível carregar os destinos. Tente de novo em alguns instantes.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarDestinos();
  }, []);

  // Sempre confirma antes de apagar de verdade — não tem como desfazer.
  function confirmarExclusao(destino) {
    Alert.alert(
      "Excluir destino",
      `Tem certeza que quer excluir "${destino.title}"? Essa ação não pode ser desfeita.`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => excluirDestino(destino.id),
        },
      ]
    );
  }

  async function excluirDestino(id) {
    setExcluindoId(id);
    try {
      await api.delete(`/api/destinos/${id}`);

      setDestinos((atual) => atual.filter((item) => item.id !== id));

      Alert.alert("Sucesso!", "Destino excluido com sucesso!");
    } catch (e) {
      Alert.alert(
        "Não foi possível excluir este destino",
        "A API respondeu com erro. Tente novamente em alguns instantes."
      );
    } finally {
      setExcluindoId(null);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Excluir destino</Text>
          <Text style={styles.subtitulo}>DELETE /api/destinos/:id</Text>
        </View>

        {carregando && <ActivityIndicator style={{ marginVertical: 16 }} />}
        {erro && <Text style={styles.erro}>{erro}</Text>}

        {!carregando &&
          destinos.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.imagem} />
              <View style={styles.info}>
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={styles.categoria}>
                  {item.pais} · {item.tipo_destino}
                </Text>
              </View>
              <Pressable
                style={styles.botaoExcluir}
                onPress={() => confirmarExclusao(item)}
                disabled={excluindoId === item.id}
              >
                <Text style={styles.botaoExcluirTexto}>
                  {excluindoId === item.id ? "..." : "Excluir"}
                </Text>
              </Pressable>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: "#F6F5F2" 
},
  conteudo: { 
    padding: 24, 
    paddingBottom: 48
 },
  header: { 
    marginBottom: 16 
},
  tituloPagina: { 
    fontSize: 24, 
    fontWeight: "800", 
    color: "#102542" 
},
  subtitulo: { 
    fontSize: 14, 
    color: "#5f6b7a", 
    marginTop: 5 
},
  erro: { 
    color: "#c62828", 
    marginTop: 12 
},
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#b58a358a",
    borderRadius: 15,
    borderRadius: 10,
    overflow: "hidden",
    paddingRight: 12,
  },
  imagem: { 
    width: 100, 
    height: 110 
},
  info: { 
    flex: 1, 
    justifyContent: "center" 
},
  titulo: { 
    fontSize: 16, 
    fontWeight: "700",
    marginBottom: 5,
 },
  categoria: { 
    fontSize: 13, 
    color: "#64748b"
 },
  botaoExcluir: {
    backgroundColor: "#c62828",
    padding: 11,
    borderRadius: 8,
  },
  botaoExcluirTexto: { 
    color: "white", 
    fontWeight: "700", 
    fontSize: 13 
},
});