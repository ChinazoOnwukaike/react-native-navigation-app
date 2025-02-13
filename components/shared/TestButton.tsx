import { View, Text, Pressable } from "react-native";
import React, { forwardRef, Ref } from "react";

type TestButtonType = {
  btnText: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text";
  className?: string;
  onPress?: () => void;
  onLongPress?: () => void;
};

const TestButton = forwardRef(
  (
    {
      btnText,
      color = "primary",
      variant = "contained",
      className,
      onPress,
      onLongPress,
    }: TestButtonType,
    ref: Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color];

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color];

    if (variant === "text") {
      return (
        <Pressable
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center ${textColor}`}>{btnText}</Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center font-work-medium">
          {btnText}
        </Text>
      </Pressable>
    );
  }
);

export default TestButton;
