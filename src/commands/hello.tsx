import React from "react";
import { Text } from "ink";
import zod from "npm:zod";

export const options = zod.object({
  name: zod.string().default("Stranger").describe("Name"),
});

type Props = {
  options: zod.infer<typeof options>;
};

export default function Hello({ options }: Props) {
  return (
    <Text>
      Hello, <Text color="green">{options.name}</Text>
    </Text>
  );
}
