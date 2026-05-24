import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5  bg-background ">
      <Text className="text-5xl font-sans-extrabold text-accent">Home</Text>
      <Link href="/onboarding">
        <Text className="text-7xl font-sans-bold text-accent">Get Started</Text>
      </Link>

      <Link href="/(auth)/sign-in">
        <Text className="text-lg font-semibold text-black">Sign In</Text>
      </Link>

      <Link href="/(auth)/sign-up">
        <Text className="text-lg font-semibold text-accent">sign up</Text>
      </Link>
    </SafeAreaView>
  );
}
