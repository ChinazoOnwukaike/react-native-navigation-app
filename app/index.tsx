import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const App = () => {
  return (
    // <Redirect href="/(stack)/home" />
    // <Redirect href="/drawer" />
    <Redirect href="/home" />
    // <SafeAreaView>
    //   <View className="mt-10 mx-2.5">
    //     <Text className="text-3xl" style={{ fontFamily: "worksans-black" }}>
    //       Hola Mundo
    //     </Text>
    //     <Text className="text-3xl font-work-black text-primary">
    //       Hola Mundo
    //     </Text>
    //     <Text className="text-3xl font-work-medium text-secondary">
    //       Hola Mundo
    //     </Text>
    //     <Text className="text-3xl font-work-medium text-secondary-100">
    //       Hola Mundo
    //     </Text>
    //     <Text className="text-3xl font-work-light text-tertiary">
    //       Hola Mundo
    //     </Text>

    //     <Link href="/products">Productos</Link>
    //   </View>
    // </SafeAreaView>
  );
};

export default App;
