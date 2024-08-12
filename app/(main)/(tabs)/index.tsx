import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { RPH, RPW } from "@/utils/dimensions";
import Action from "@/components/ui/Action";

export default function index() {
  const [showBalance, setShowBalance] = useState(true);
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
            padding: 14,
            marginBottom: 20,
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
              <MaterialIcons name="add-card" size={24} color={"#F9FAFB"} />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#101828",
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: RPH(10),
              justifyContent: "space-between",
              marginHorizontal: RPW(3.5),
            }}
          >
            <Action navigateTo="/" icon="hand-coin-outline" label="Top Up" />
            <Action navigateTo="/" icon="cash" label="Withdraw" />
            <Action navigateTo="/" icon="bank" label="Transfer" />
            <Action navigateTo="/" icon="credit-card" label="Pay" />
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#1D2939",
          borderRadius: 10,
          top: "30%",
          padding: 20,
          left: 0,
          right: 0,
          transform: [{ translateX: RPW(3.5) }],
          width: RPW(93),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#98A2B3",
              fontWeight: "500",
            }}
          >
            Your Balance
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#98A2B3",
              fontWeight: "500",
            }}
          >
            1234 5678
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "baseline",
              gap: 6,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                color: "#F9FAFB",
                textAlign: "right",
              }}
            >
              {showBalance ? "5000" : "****"}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#F9FAFB",
                textAlign: "left",
              }}
            >
              THB
            </Text>
          </View>
          <View
            style={{
              height: 24,
              width: 1,
              backgroundColor: "#98A2B3",
            }}
          />
          <Pressable
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
            onPress={() => setShowBalance(!showBalance)}
          >
            <MaterialCommunityIcons
              name={showBalance ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={"#6172F3"}
            />
            <Text
              style={{
                color: "#6172F3",
                fontSize: 13,
              }}
            >
              {showBalance ? "Hide" : "Show"}
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
