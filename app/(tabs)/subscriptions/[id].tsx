import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 justify-center items-center">
      <Text> SubscriptionDetails: {id}</Text>
      <Link href="/">back</Link>
    </View>
  );
};

export default SubscriptionDetails;
