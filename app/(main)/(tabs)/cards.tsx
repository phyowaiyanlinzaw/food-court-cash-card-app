import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CashCardInfo from "@/components/ui/CashCardInfo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RPH } from "@/utils/dimensions";

export default function cards() {
  return (
    <ScrollView
      style={{
        backgroundColor: "#101829",
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          marginBottom: 6,
        }}
      >
        <CashCardInfo cardNumber="**** **** **** 1234" name="John Doe" />
      </View>
      <View
        style={{
          marginBottom: 6,
        }}
      >
        <CashCardInfo cardNumber="**** **** **** 1234" name="John Doe" />
      </View>
      <View
        style={{
          marginBottom: 6,
        }}
      >
        <CashCardInfo cardNumber="**** **** **** 1234" name="John Doe" />
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#1D2939",
          padding: 10,
          height: RPH(18),
          marginBottom: 10,
          gap: 10,
        }}
      >
        <MaterialCommunityIcons name="plus-circle" size={24} color="white" />

        <Text
          style={{
            fontSize: 16,
            color: "#F9FAFB",
            fontWeight: "700",
          }}
        >
          Add Another Card
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
