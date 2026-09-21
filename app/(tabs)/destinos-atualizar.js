import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import Header from "../components/Header";

const API_KEY =
  "cv_Gn0qOruAr2cddoXPAbLw3Jv8Nt98wHmApPnTxUtPSj0L6dnNhBXZDtujN_vwbml9";

const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function DestinosEditarScreen() {
  const [destinos, setDestinos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [salvando, setSalvando] = useState(false);

  const [selecionado, setSelecionado] = useState(null);

  const [titulo, setTitulo] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [pais, setPais] = useState("");
  const [tipoDestino, setTipoDestino] = useState("");
  const [melhorEpoca, setMelhorEpoca] = useState("");
  const [custoMedio, setCustoMedio] = useState("");

  async function buscarDestinos() {
    setCarregando(true);
    setErro(null);
    try {
      const resposta = await api.get("/api/destinos", {
        params: { limit: 50 },
      });
      setDestinos(resposta.data.data);
    } catch (e) {
      setErro(
        "Não foi possível carregar os destinos. Tente novamente em instantes",
      );
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarDestinos();
  }, []);

  function selecionarDestino(destino) {
    setSelecionado(destino);
    setTitulo(destino.title ?? "");
    setImagemUrl(destino.imageUrl ?? "");
    setPais(destino.pais ?? "");
    setTipoDestino(destino.tipo_destino ?? "");
    setMelhorEpoca(destino.melhor_epoca ?? "");
    setCustoMedio(destino.custo_medio ?? "");
  }

  async function salvarEdicao() {
    if (!selecionado) return;
    if (!titulo) {
      Alert.alert("Preencha pelo menos o título.");
      return;
    }

    setSalvando(true);
    try {
      const resposta = await api.put(`/api/destinos/${selecionado.id}`, {
        title: titulo,
        imageUrl: imagemUrl,
        pais: pais,
        tipo_destino: tipoDestino,
        melhor_epoca: melhorEpoca,
        custo_medio: custoMedio,
      });

      // Esta API devolve o registro atualizado dentro de "data".
      Alert.alert("Destino atualizado!", resposta.data.data.title);

      setSelecionado(null);
      buscarDestinos(); // recarrega a lista com o dado novo
    } catch (e) {
      Alert.alert(
        "Não deu pra atualizar o destino",
        "A API respondeu com erro. Confira se todos os campos estão certinhos e tenta de novo.",
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Header />
          <Text style={styles.tituloPagina}>Editar destino</Text>
          <Text style={styles.subtitulo}>PUT /api/destinos/:id</Text>
        </View>

        {!selecionado && (
          <>
            <Text style={styles.instrucao}>
              Toque em um destino pra editar:
            </Text>

            {carregando && <ActivityIndicator style={{ marginVertical: 16 }} />}
            {erro && <Text style={styles.erro}>{erro}</Text>}

            {!carregando &&
              destinos.map((item) => (
                <View key={item.id} style={styles.card}>
                  <Image source={{ uri: item.imageUrl }} style={styles.imagem} />
                  <View style={styles.info}>
                    <Text style={styles.titulo}>{item.title}</Text>
                  </View>
                  <Pressable
                    style={styles.botaoEditar}
                    onPress={() => selecionarDestino(item)}
                  >
                    <Text style={styles.botaoEditarTexto}>Editar</Text>
                  </Pressable>
                </View>
              ))}
          </>
        )}

        {selecionado && (
          <>
            <Pressable
              onPress={() => setSelecionado(null)}
              style={styles.voltar}
            >
              <Text style={styles.voltarTexto}>‹ Voltar pra lista</Text>
            </Pressable>

            <Text style={styles.rotulo}>Título</Text>
            <TextInput
              style={styles.campo}
              value={titulo}
              onChangeText={setTitulo}
              placeholder="Ex: Paris"
              placeholderTextColor="#5f6b7a"
            />

            <Text style={styles.rotulo}>URL da imagem</Text>
            <TextInput
              style={styles.campo}
              value={imagemUrl}
              onChangeText={setImagemUrl}
              placeholder="Ex: https://exemplo.com/paris.jpg"
              placeholderTextColor="#5f6b7a"
            />

            <Text style={styles.rotulo}>País</Text>
            <TextInput
              style={styles.campo}
              value={pais}
              onChangeText={setPais}
              placeholder="Ex: França"
              placeholderTextColor="#5f6b7a"
            />

            <Text style={styles.rotulo}>Tipo de destino</Text>
            <View style={styles.opcoes}>
              {["Cidade", "Montanha", "Natureza", "Praia"].map(
                (opcao) => (
                  <Pressable key={opcao}
                    style={[styles.opcao, tipoDestino === opcao && styles.opcaoSelecionada]}
                    onPress={() => setTipoDestino(opcao)}
                  >
                    <Text style={[
                      styles.opcaoTexto,
                      tipoDestino === opcao && styles.opcaoTextoSelecionada
                    ]}>
                      {opcao}
                    </Text>
                  </Pressable>
                )
              )}
            </View>

            <Text style={styles.rotulo}>Melhor época para visitar</Text>
            <TextInput
              style={styles.campo}
              value={melhorEpoca}
              onChangeText={setMelhorEpoca}
              placeholder="Ex: Primavera"
              placeholderTextColor="#5f6b7a"
            />

            <Text style={styles.rotulo}>Custo médio (R$) </Text>
            <TextInput
              style={styles.campo}
              value={custoMedio}
              onChangeText={setCustoMedio}
              placeholder="Ex: 8000"
              placeholderTextColor="#5f6b7a"
            />

            <Pressable
              style={styles.botao}
              onPress={salvarEdicao}
              disabled={salvando}
            >
              <Text style={styles.botaoTexto}>
                {salvando ? "Salvando..." : "Salvar alterações"}
              </Text>
            </Pressable>
          </>
        )}
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
    paddingHorizontal: 24,
  },

  header: {
    marginBottom: 16,
  },

  tituloPagina: {
    fontSize: 24,
    fontWeight: "800",
    color: "#17294d",
  },

  subtitulo: {
    fontSize: 14,
    color: "#5f6b7a",
    marginTop: 2,
  },

  instrucao: {
    fontSize: 14,
    color: "#334155",
    marginBottom: 8,
  },

  erro: {
    color: "#c62828",
    marginTop: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#b58a358a",
    borderRadius: 10,
    overflow: "hidden",
    paddingRight: 12,
  },

  imagem: {
    width: 100,
    height: 110,
  },

  info: {
    flex: 1,
    justifyContent: "center",
  },

  titulo: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    color: "#102542",
  },

  categoria: {
    fontSize: 13,
    color: "#64748b",
  },

  botaoEditar: {
    backgroundColor: "#b58a35ce",
    padding: 11,
    borderRadius: 8,
  },

  botaoEditarTexto: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
  },

  voltar: {
    marginBottom: 16,
  },

  voltarTexto: {
    color: "#b58a35ce",
    fontWeight: "700",
  },

  rotulo: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    margin: 6,
  },

  campo: {
    borderWidth: 0.5,
    borderColor: "#b58a358a",
    borderRadius: 15,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "white",
  },

  botao: {
    backgroundColor: "#b58a35ce",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  botaoTexto: {
    color: "white",
    fontWeight: "700",
  },
  opcoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  opcao: {
    borderWidth: 0.5,
    borderColor: "#b58a358a",
    borderRadius: 18,
    padding: 11,
    backgroundColor: "white",
  },

  opcaoSelecionada: {
    backgroundColor: "#B58A35",
    borderColor: "#B58A35",
  },
  opcaoTexto: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748b",
  },

  opcaoTextoSelecionada: {
    color: "white",
  },
});