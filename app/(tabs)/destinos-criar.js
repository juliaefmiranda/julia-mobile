import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const API_KEY =
  "cv_FTuu3Fs8nTK7yXxbiAXjO4Hmn3sY3wYtAexGcKYu68Ai_H_FX3itFlyOBs3mUtia";

const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function DestinosCriarScreen() {
  const [titulo, setTitulo] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [pais, setPais] = useState("");
  const [tipoDestino, setTipoDestino] = useState("");
  const [melhorEpoca, setMelhorEpoca] = useState("");
  const [custoMedio, setCustoMedio] = useState("");

  const [enviando, setEnviando] = useState(false);

  async function criarDestino() {
    if ( !pais.trim() || !tipoDestino.trim() || !melhorEpoca.trim()) {
      Alert.alert("Preencha os campos obrigatórios para criar um país!");
      return;
    }

    if (titulo.length < 3 || titulo.length > 120) {
      Alert.alert("Atenção! O título deve ter entre 3 e 120 caracteres.");
      return;
    }

    const imageUrlValida = imagemUrl.trim();
    if(imageUrlValida) {
      try {
        new URL(imageUrlValida);
      } catch {
        Alert.alert(
          "Atenção, a URL da imagem não é válida."
        );
        return;
      }
    }

    if (!custoMedio.trim()) {
      Alert.alert("Atenção, o custo médio é obrigatório.");
      return;
    }

    const custoMedioNumero = Number(
      custoMedio.replace(",", ".")
    );

    if (isNaN(custoMedioNumero)) {
      Alert.alert("Atenção, o custo médio deve ser um número válido.");
    }

    setEnviando(true);
    try {
      const resposta = await api.post("/api/destinos", {
        title: titulo,
        imageUrl: imageUrlValida || null,
        pais: pais.trim(),
        tipo_destino: tipoDestino.trim(),
        melhor_epoca: melhorEpoca.trim(),
        custo_medio: custoMedioNumero,
      });

      Alert.alert("Destino criado!", resposta.data.title);
      setTitulo("");
      setImagemUrl("");
      setTipoDestino("");
      setCustoMedio("");
      setMelhorEpoca("");
      setPais("");
    } catch (e) {
      Alert.alert(
        "Não foi possível criar esse destino.",
        "A API respondeu com erro. Confira se todos os campos estão corretos e tente novamente.",
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Criar destino</Text>
          <Text style={styles.subtitulo}>POST /api/destinos</Text>
        </View>

        <Text style={styles.rotulo}>Título</Text>
        <TextInput
          style={styles.campo}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Ex: Rio de Janeiro"
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.rotulo}>URL da imagem</Text>
        <TextInput
          style={styles.campo}
          value={imagemUrl}
          onChangeText={setImagemUrl}
          placeholder="Ex: https://exemplo.com/brasil.jpg"
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.rotulo}>País</Text>
        <TextInput
          style={styles.campo}
          value={pais}
          onChangeText={setPais}
          placeholder="Ex: Brasil"
          placeholderTextColor="#94a3b8"
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

        <Text style={styles.rotulo}>Melhor época</Text>
        <TextInput
          style={styles.campo}
          value={melhorEpoca}
          onChangeText={setMelhorEpoca}
          placeholder="Ex: Primavera"
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.rotulo}> Custo médio</Text>
        <TextInput
          style={styles.campo}
          value={custoMedio}
          onChangeText={setCustoMedio}
          placeholder="Ex: R$xxxxx"
          placeholderTextColor="#94a3b8"
        />

        <Pressable
          style={styles.botao}
          onPress={criarDestino}
          disabled={enviando}
        >
          <Text style={styles.botaoTexto}>
            {enviando ? "Enviando..." : "Criar destino"}
          </Text>
        </Pressable>
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
  },

  header: { 
    marginBottom: 16 
  },

  tituloPagina: { 
    fontSize: 24, 
    fontWeight: "800", 
    color: "#17294D"
   },

  subtitulo: { 
    fontSize: 14, 
    color: "#5f6b7a", 
    marginTop: 2 
  },

  secao: {
    fontSize: 14,
    fontWeight: "700",
    color: "#102542",
  },

  rotulo: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 5,
  },
  campo: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "white",
  },
  opcoes: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    gap: 8, 
    marginBottom: 20, 
  }, 
  
  opcao: { 
    borderWidth: 1, 
    borderColor: "#cbd5e1", 
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
   
  botao: {
    backgroundColor: "#B58A35",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoTexto: { 
    color: "white", 
    fontWeight: "700" 
  },
});
