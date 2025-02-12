import "./global.css";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "worksans-black": require("../assets/fonts/worksans-black.ttf"),
    "worksans-light": require("../assets/fonts/worksans-light.ttf"),
    "worksans-medium": require("../assets/fonts/worksans-medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
