import React from "npm:react";
import { Box, Text } from "npm:ink";
import Command from "npm:pastel";
import Spinner from "npm:ink-spinner";

interface CreateEnvOptions {
  name?: string;
  key?: string;
  secret?: string;
}

export default class CreateEnvCommand extends Command {
  static path = ["create:env"];
  static description = "Create an Environment";
  static options = {
    "--name, -n": "The name of the environment to create",
    "--key, -k": "The API Key to use",
    "--secret, -s": "The API Secret to use",
  };

  async execute(options: CreateEnvOptions) {
    if (!options.name) {
      return (
        <Box>
          <Text color="red">
            Error: Must provide --name for the environment
          </Text>
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
}
