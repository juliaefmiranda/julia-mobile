import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "#0f62fe",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="destinos-listar"
        options={{
          title: "GET",
          headerTitle: "Lista de destinos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="airplane-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="destinos-criar"
        options={{
          title: "POST",
          headerTitle: "Crie um novo destino",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="destinos-deletar"
        options={{
          title: "DELETE",
          headerTitle: "Delete um destino",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trash-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="destinos-atualizar"
        options={{
          title: "UPDATE",
          headerTitle: "Atualize um destino",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sync-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="destinos-id"
        options={{
          title: "ID",
          headerTitle: "Busque um destino",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="id-card-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
