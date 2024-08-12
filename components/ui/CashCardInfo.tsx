import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RPH, RPW } from "@/utils/dimensions";
import CashCard from "./CashCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  cardNumber: string;
  name: string;
};

export default function CashCardInfo({ cardNumber, name }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#1D2939",
        flexDirection: "row",
        paddingVertical: 6,
        alignItems: "center",
      }}
    >
      <View
        style={{
          transform: [{ translateX: RPW(-35) }],
        }}
      >
        <CashCard height={RPH(17)} width={RPW(80)} />
      </View>

      <View
        style={{
          left: RPW(-25),
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#F9FAFB",
            fontWeight: "700",
          }}
        >
          Card 1
        </Text>
        <Text
          style={{
            color: "#98A2B3",
            fontSize: 13,
            fontWeight: "500",
          }}
        >
          Name : Pablo
        </Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#101829",
          padding: 10,
          borderRadius: 10,
          position: "absolute",
          right: 0,
          transform: [{ translateX: RPW(-5) }],
        }}
      >
        <MaterialCommunityIcons
          name="arrow-right"
          size={24}
          color="#fff"
          style={{}}
        />
      </TouchableOpacity>
    </View>
  );
}
