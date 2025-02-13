import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import TestButton from "@/components/shared/TestButton";
import { DrawerActions } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
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
          className="mb-2"
        >
          Productos
        </CustomButton>
        <CustomButton
          color="secondary"
          onPress={() => router.push("/profile")}
          className="mb-2"
        >
          Perfil
        </CustomButton>
        <CustomButton
          color="tertiary"
          onPress={() => router.push("/settings")}
          className="mb-2"
        >
          Ajustes
        </CustomButton>
        <CustomButton
          color="primary"
          onPress={() => router.push("/products")}
          className="mb-2"
          variant="text"
        >
          Productos
        </CustomButton>
        <CustomButton color="primary" onPress={onToggleDrawer} className="mb-2">
          Abrir Menu
        </CustomButton>

        {/* <Link href="/products" asChild>
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

        <Link href="/products" asChild>
          <TestButton
            color="secondary"
            onPress={() => router.push("/products")}
            className="mb-10"
            btnText="Productos"
          />
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
