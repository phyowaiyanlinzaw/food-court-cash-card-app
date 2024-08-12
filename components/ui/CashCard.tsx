import { View, Text, Image } from "react-native";
import React from "react";
import { RPH, RPW } from "@/utils/dimensions";

type Props = {
  height: number;
  width: number;
};

export default function CashCard({ height, width }: Props) {
  return (
    <View
      style={{
        height: height,
        width: width,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Image
        source={require("../../assets/images/cash-card.jpeg")}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </View>
  );
}
