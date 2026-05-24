import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
      <Link href="/(tabs)">Back to Home</Link>
    </View>
  );
};

export default SignIn;
