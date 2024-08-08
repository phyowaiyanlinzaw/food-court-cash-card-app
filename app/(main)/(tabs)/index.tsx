import { View, Text, SafeAreaView, Platform, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 25 : 0,
          backgroundColor: "#6172F3",
        }}
      >
        <View
          style={{
            padding: 20,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#1D2939",
                  borderRadius: 100,
                  width: 40,
                  height: 40,
                }}
              >
                <Image
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/68211502?v=4",
                  }}
                  style={{
                    borderRadius: 100,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </View>
              <Text
                style={{
                  color: "#F9FAFB",
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Good Afternoon, User
              </Text>
            </View>
            <MaterialIcons
              name="notifications-none"
              size={32}
              color={"#F9FAFB"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#1D2939",
                flexDirection: "row",
                padding: 15,
                borderRadius: 10,
                gap: 10,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#6172F3",
                  width: 90,
                  height: 50,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#F9FAFB",
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
                  Name: Pablo
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={32}
                color={"#F9FAFB"}
              />
            </View>
            <View
              style={{
                borderRadius: 100,
                backgroundColor: "#1D2939",
                width: 80,
                height: 80,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="add-card" size={32} color={"#F9FAFB"} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View></View>
      <View
        style={{
          backgroundColor: "#101828",
          height: "100%",
        }}
      ></View>
    </>
  );
}
