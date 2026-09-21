import { React, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import axios from "axios"; //lib usada para fazer chamadas HTTP para API
import { SafeAreaView } from "react-native-safe-area-context"; // evita que o conteúdo fique embaixo do notch/ barra do celular
import { useFocusEffect } from "expo-router";
import Header from "../components/Header";

const API_KEY =
  "cv_Gn0qOruAr2cddoXPAbLw3Jv8Nt98wHmApPnTxUtPSj0L6dnNhBXZDtujN_vwbml9";

const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function DestinosListarScreen() {
  const [destinos, setDestinos] = useState([]);
  const [id, setId] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [destino, setDestino] = useState(null);
  const [buscando, setBuscando] = useState(false);
  const [erro, setErro] = useState(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);

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
      // próprio objeto do destino direto no corpo da resposta.
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

  useFocusEffect(
    useCallback(() => { //Atualiza a lista de destinos sempre que a tela é aberta dnv (qnd recebe o foco)
      buscarDestinos();
    }, []),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Header />
          <Text style={styles.tituloPagina}>Destinos</Text>
          <Text style={styles.subtitulo}>Consulte todos os destinos ou busque por ID</Text>
        </View>

        <View style={styles.buscaContainer}>
          <Text style={styles.rotulo}>Buscar por ID:</Text>
          <View style={styles.linhaBusca}>
            <TextInput
              style={styles.campo}
              value={id}
              placeholder="Ex:1"
              placeholderTextColor="#5f6b7a"
              keyboardType="numeric"
              onChangeText={setId}
            />

            <Pressable style={styles.botao} onPress={buscarPorId} disabled={buscando}>
              <Text style={styles.botaoTexto}>{buscando ? "..." : "Buscar"}</Text>
            </Pressable>
          </View>
        </View>

        {erro && <Text style={styles.erro}>{erro}</Text>}

        {naoEncontrado && (
          <Text style={styles.avisoNaoEncontrado}>Nenhum destino encontrado com o id "{id}"</Text>
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

        <View style={styles.listaContainer}>
          <Text style={styles.rotuloLista}>Todos os destinos</Text>

          {carregando && (
            <ActivityIndicator style={styles.carregando} />
          )}

          {!carregando &&
          destinos.map((destino) => (
            <View key={destino.id} style={styles.card}>
              <Image source={{ uri: destino.imageUrl }} style={styles.imagem} />
              <View style={styles.info}>
                <Text style={styles.titulo}>{destino.title}</Text>

                <Text style={styles.detalhes}>
                  {destino.pais} · {destino.tipo_destino}
                </Text>
                <Text style={styles.detalhes}>
                  Melhor época: {destino.melhor_epoca}
                </Text>

                <Text style={styles.status}>
                  Custo médio: R${destino.custo_medio}
                </Text>
              </View>
            </View>
          ))}
        </View>

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
    paddingHorizontal: 24,
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
    fontSize: 15, 
    fontWeight: "600", 
    color: "#334155", 
    marginBottom: 10,
    marginTop: 4,
},
  rotuloLista: { 
    fontSize: 15, 
    fontWeight: "600", 
    color: "#334155", 
    marginBottom: 1,
    marginTop: 35,
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
