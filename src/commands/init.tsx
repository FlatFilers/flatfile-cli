import React from "npm:react";
import { Box, Text } from "npm:ink";
import Command from "npm:pastel";
import Spinner from "npm:ink-spinner";

interface InitOptions {
  environment?: string;
  key?: string;
  clientId?: string;
  name?: string;
  secret?: string;
  team?: string;
  x?: boolean;
}

export default class InitCommand extends Command {
  static path = ["init"];
  static description = "Initialize a project";
  static options = {
    "--environment, -e": "The Environment to publish to",
    "--key, -k": "The API Key to use",
    "--clientId, -c": "The clientId to use",
    "--name, -n": "The name of your project",
    "--secret, -s": "The API Secret to use",
    "--team, -t": "The Team ID to publish to",
    "--x": "Initialize the project to deploy to X",
  };

  async execute(options: InitOptions) {
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
}
