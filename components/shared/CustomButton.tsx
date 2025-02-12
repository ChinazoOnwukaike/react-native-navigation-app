import { View, Text, Pressable, PressableProps } from "react-native";
import React, { forwardRef, Ref } from "react";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";

  variant?: "contained" | "text";
  className?: string;
}

const CustomButton = forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contained",
      className,
    }: Props,
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
          <Text className={`text-center ${textColor}`}>{children}</Text>
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
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
