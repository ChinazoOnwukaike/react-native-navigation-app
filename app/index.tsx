import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-10 mx-2.5">
        <Text className="text-3xl" style={{ fontFamily: "worksans-black" }}>
          Hola Mundo
        </Text>
        <Text className="text-3xl font-work-medium">Hola Mundo</Text>
        <Text className="text-3xl font-work-light">Hola Mundo</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
