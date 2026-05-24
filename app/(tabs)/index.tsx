import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background ">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding">
        <Text className="text-lg font-semibold text-accent">Get Started</Text>
      </Link>

      <Link href="/(auth)/sign-in">
        <Text className="text-lg font-semibold text-accent">Sign In</Text>
      </Link>

      <Link href="/(auth)/sign-up">
        <Text className="text-lg font-semibold text-accent">sign up</Text>
      </Link>
      <Link href="/subscriptions/xbox">
        <Text className="text-lg font-semibold text-accent">
          View Xbox Subscription
        </Text>
      </Link>
    </View>
  );
}
