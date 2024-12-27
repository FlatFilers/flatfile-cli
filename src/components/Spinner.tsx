import React from "react";
import { Text } from "ink";
import InkSpinner from "ink-spinner";

interface SpinnerProps {
  text: string;
}

export function Spinner({ text }: SpinnerProps) {
  return (
    <Text>
      <Text color="green">
        <InkSpinner type="dots" />
      </Text>
      {" " + text}
    </Text>
  );
}
