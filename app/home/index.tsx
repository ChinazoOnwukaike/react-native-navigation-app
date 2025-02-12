import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        {/* <Link href="/products" className="mb-5">
          Productos
        </Link>
        <Link href="/profile" className="mb-5">
          Perfil
        </Link>
        <Link href="/settings" className="mb-5">
          Ajustes
        </Link> */}
        <CustomButton
          color="primary"
          onPress={() => router.push("/products")}
          className="mb-10"
        >
          Products
        </CustomButton>
        <Link href="/products" asChild>
          <CustomButton
            color="primary"
            onPress={() => router.push("/products")}
            className="mb-10"
          >
            Products
          </CustomButton>
        </Link>
        <Link href="/products" asChild>
          <CustomButton
            color="primary"
            onPress={() => router.push("/products")}
            variant="text"
            className="mb-10"
          >
            Products
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;
