import React from "npm:react";
import { Box, Text } from "npm:ink";
import Command from "npm:pastel";
import Spinner from "npm:ink-spinner";

interface QuickstartOptions {
  team?: string;
  apiUrl?: string;
}

export default class QuickstartCommand extends Command {
  static path = ["quickstart"];
  static description = "Initialize a quickstart Workbook";
  static options = {
    "--team, -t": "The Team ID to publish to",
    "--api-url": "The API URL to use",
  };

  async execute(options: QuickstartOptions) {
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
}
