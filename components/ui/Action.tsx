import { View, Text, Pressable } from "react-native";
import React from "react";
import { Href, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  navigateTo: Href<string | object>;
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
};

export default function Action({ navigateTo, icon, label }: Props) {
  return (
    <Pressable
      onPress={() => {
        router.navigate(navigateTo);
      }}
      style={{
        backgroundColor: "#1D2939",
        borderRadius: 10,
      }}
    >
      <MaterialIcons name={icon} size={32} color="#F9FAFB" />
      <Text
        style={{
          color: "#F9FAFB",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
