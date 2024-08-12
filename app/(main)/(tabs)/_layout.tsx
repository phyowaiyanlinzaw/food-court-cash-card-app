import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#6172F3",
        tabBarStyle: {
          backgroundColor: "#1D2939",
          height: 95,
          padding: 10,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="find-shop"
        options={{
          headerShown: false,
          headerTitle: "Find Shop",
          title: "Find Shop",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          headerStyle: {
            backgroundColor: "#101829",
            shadowColor: "transparent",
          },
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: "700",
          },
          headerTitle: "Food Cash Card",
          title: "Cards",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="workspaces-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          headerTitle: "Profile",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
