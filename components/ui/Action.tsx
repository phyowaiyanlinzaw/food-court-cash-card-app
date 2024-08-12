import { View, Text, Pressable } from "react-native";
import React from "react";
import { Href, router } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { RPH, RPW } from "@/utils/dimensions";

type Props = {
  navigateTo: Href<string | object>;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
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
        height: RPH(10),
        width: RPW(20),
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        borderColor: "rgba(249, 250, 251, 0.1)",
        borderWidth: 1,
      }}
    >
      <MaterialCommunityIcons name={icon} size={28} color="#F9FAFB" />
      <Text
        style={{
          color: "#F9FAFB",
          fontSize: 13,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
