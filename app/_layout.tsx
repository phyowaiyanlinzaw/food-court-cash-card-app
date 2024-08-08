import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(main)/(tabs)"
        options={{
          headerShown: false,
          title: "Hi",
        }}
      />
    </Stack>
  );
}
