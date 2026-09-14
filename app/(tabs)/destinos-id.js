import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// Em produção, uma chave de API não deveria morar direto no código do
// app (dá pra extrair de qualquer APK/IPA instalado). Aqui, como é uma
// API pública de estudo, deixamos direto no código pra simplificar.
const API_KEY = "cv_Na-JCs28Pv5wim0lXht00z-hCd5F9Bq9oXRi2np8Xj2CZDpDNSFk7mcBZvqWvNKi";

// Mesma instância do axios usada nas outras telas, com o header já
// configurado — toda chamada feita com "api" já sai autenticada.
const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

// ---------- GET por id: buscar um herói específico ----------
export default function DestinosBuscarScreen() {
  const [id, setId] = useState("");
  const [destino, setDestino] = useState(null);
  const [buscando, setBuscando] = useState(false);
  const [erro, setErro] = useState(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);

  async function buscarPorId() {
    if (!id) {
      setErro("Digite um id pra buscar.");
      return;
    }

    Keyboard.dismiss();
    setBuscando(true);
    setErro(null);
    setNaoEncontrado(false);
    setDestino(null);

    try {
      // Sem params e sem .data.data: a rota de um item só devolve o
      // próprio objeto do herói direto no corpo da resposta.
      const resposta = await api.get(`/api/destinos/${id}`);
      setDestino(resposta.data);
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setNaoEncontrado(true);
      } else {
        setErro("Não foi possível buscar o destino. Tenta de novo em instantes.");
      }
    } finally {
      setBuscando(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Buscar destino</Text>
          <Text style={styles.subtitulo}>GET /api/destinos/:id</Text>
        </View>

        <Text style={styles.rotulo}>Id do destino</Text>
        <View style={styles.linhaBusca}>
          <TextInput
            style={styles.campo}
            value={id}
            onChangeText={setId}
            placeholder="Ex: 1"
            placeholderTextColor="#5f6b7a"
            keyboardType="numeric"
          />
          <Pressable style={styles.botao} onPress={buscarPorId} disabled={buscando}>
            <Text style={styles.botaoTexto}>{buscando ? "..." : "Buscar"}</Text>
          </Pressable>
        </View>

        {buscando && <ActivityIndicator style={{ marginVertical: 16 }} />}
        {erro && <Text style={styles.erro}>{erro}</Text>}

        {naoEncontrado && (
          <Text style={styles.avisoNaoEncontrado}>
            Nenhum destino encontrado com o id "{id}".
          </Text>
        )}

        {destino && (
          <View style={styles.card}>
            <Image source={{ uri: destino.imageUrl }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.titulo}>{destino.title}</Text>
              <Text style={styles.categoria}>
                {destino.pais} · {destino.tipo_destino}
              </Text>
              <Text style={styles.melhorEpoca}>Melhor Época: {destino.melhor_epoca}</Text>
              <Text style={styles.custoMedio}>Custo Médio: {destino.custo_medio}</Text>
            </View>
          </View>
        )}
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
  rotulo: { 
    fontSize: 13, 
    fontWeight: "600", 
    color: "#334155", 
    margin: 3
},
  linhaBusca: { 
    flexDirection: "row", 
    gap: 8, 
    alignItems: "flex-start"
 },
  campo: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#b58a358a",
    borderRadius: 15,
    padding: 12,
    backgroundColor: "white",
  },
  botao: {
    backgroundColor: "#b58a35be",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: { 
    color: "white", 
    fontWeight: "700" 
},

  erro: { 
    color: "#c62828", 
    marginTop: 12 
},
  avisoNaoEncontrado: { 
    color: "#9a6700", 
    marginTop: 16, 
    fontStyle: "italic" 
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
    overflow: "hidden",
  },
  imagem: { 
    width: 110, 
    height: 110
 },
  info: { 
    flex: 1, 
    justifyContent: "center", 
    paddingRight: 12, 
    gap: 2 
},
  titulo: { 
    fontSize: 16, 
    fontWeight: "700",
    color: "#102542",
    marginBottom: 5,
},
  categoria: { 
    fontSize: 13, 
    color: "#64748b",
    marginBottom: 3
 },
  melhorEpoca: { 
    fontSize: 13, 
    color: "#64748b",
    marginBottom: 3
},
  custoMedio: { 
    fontSize: 13, 
    color: "#64748b",
    marginBottom: 3
},
});