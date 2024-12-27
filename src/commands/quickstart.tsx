import React from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";
import zod from "zod";

export const options = zod.object({
  team: zod.string().optional().describe("The Team ID to publish to"),
  apiUrl: zod.string().optional().describe("The API URL to use"),
});

type Props = {
  options: zod.infer<typeof options>;
};

export default function Quickstart({ options }: Props) {
  return (
    <Box flexDirection="column">
      <Box>
        <Text>
          <Text color="green">
            <Spinner type="dots" />
          </Text>
          {" Creating quickstart workbook..."}
        </Text>
      </Box>
      {options.team && (
        <Box marginTop={1}>
          <Text>Team ID: {options.team}</Text>
        </Box>
      )}
      <Box marginTop={1}>
        <Text color="yellow">
          This will create a new workbook with sample configurations
        </Text>
      </Box>
      {/* TODO: Implement quickstart workbook creation logic */}
    </Box>
  );
}
