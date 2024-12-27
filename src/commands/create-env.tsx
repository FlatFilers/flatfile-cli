import React from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";
import zod from "zod";

export const options = zod.object({
  name: zod
    .string()
    .optional()
    .describe("The name of the environment to create"),
  key: zod.string().optional().describe("The API Key to use"),
  secret: zod.string().optional().describe("The API Secret to use"),
});

type Props = {
  options: zod.infer<typeof options>;
};

export default function CreateEnv({ options }: Props) {
  if (!options.name) {
    return (
      <Box>
        <Text color="red">Error: Must provide --name for the environment</Text>
      </Box>
    );
  }

  return (
    <Box flexDirection="column">
      <Box>
        <Text>
          <Text color="green">
            <Spinner type="dots" />
          </Text>
          {" Creating environment..."}
        </Text>
      </Box>
      <Box marginTop={1}>
        <Text>Environment Name: {options.name}</Text>
      </Box>
      {/* TODO: Implement environment creation logic */}
    </Box>
  );
}
