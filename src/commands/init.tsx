import React from "npm:react";
import { Box, Text } from "npm:ink";
import Spinner from "npm:ink-spinner";
import zod from "npm:zod";

export const options = zod.object({
  environment: zod
    .string()
    .optional()
    .describe("The Environment to publish to"),
  key: zod.string().optional().describe("The API Key to use"),
  clientId: zod.string().optional().describe("The clientId to use"),
  name: zod.string().optional().describe("The name of your project"),
  secret: zod.string().optional().describe("The API Secret to use"),
  team: zod.string().optional().describe("The Team ID to publish to"),
  x: zod.boolean().optional().describe("Initialize the project to deploy to X"),
});

type Props = {
  options: zod.infer<typeof options>;
};

export default function Init({ options }: Props) {
  return (
    <Box flexDirection="column">
      <Box>
        <Text>
          <Text color="green">
            <Spinner type="dots" />
          </Text>
          {" Initializing project..."}
        </Text>
      </Box>
      <Box marginTop={1}>
        <Text>Project Name: {options.name || "flatfile-project"}</Text>
      </Box>
      {options.team && (
        <Box>
          <Text>Team ID: {options.team}</Text>
        </Box>
      )}
      {options.x && (
        <Box>
          <Text color="yellow">Initializing for X deployment</Text>
        </Box>
      )}
      {/* TODO: Implement project initialization logic */}
    </Box>
  );
}
