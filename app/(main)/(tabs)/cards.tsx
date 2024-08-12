import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CashCard from "@/components/ui/CashCardInfo";
import CashCardInfo from "@/components/ui/CashCardInfo";

export default function cards() {
  return (
    <View
      style={{
        backgroundColor: "#101829",
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <CashCardInfo cardNumber="**** **** **** 1234" name="John Doe" />
    </View>
  );
}
