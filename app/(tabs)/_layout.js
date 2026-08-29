import { Tabs } from "expo-router";

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
          title: "Início",
          headerTitle: "Projeto Base",
        }}
      />
      <Tabs.Screen
        name="destinos-listar"
        options={{
          title: "Lista de Destinos",
          headerTitle: "Conteúdo - Destinos",
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "POST",
          headerTitle: "Conteúdo - API",
        }}
      />
    </Tabs>
  );
}
