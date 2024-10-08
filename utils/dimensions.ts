import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const RPH = (percentage: number) => (percentage / 100) * screenHeight;

export const RPW = (percentage: number) => (percentage / 100) * screenWidth;
