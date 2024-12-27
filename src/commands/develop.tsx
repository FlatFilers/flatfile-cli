import React from "npm:react";
import { Box, Text } from "npm:ink";
import Command from "npm:pastel";
import Spinner from "npm:ink-spinner";

interface DevelopOptions {
  token?: string;
  apiUrl?: string;
  env?: string;
}

export default class DevelopCommand extends Command {
  static path = ["develop", "dev"];
  static description = "Run your project as a Flatfile listener";
  static options = {
    "--token, -k":
      "The authentication token to use (or set env FLATFILE_API_KEY)",
    "--api-url": "The API URL to use (or set env FLATFILE_API_URL)",
    "--env, -e": "The Environment to use (or set env FLATFILE_ENVIRONMENT_ID)",
  };

  async execute(options: DevelopOptions, file?: string) {
    return (
      <Box flexDirection="column">
        <Box>
          <Text>
            <Text color="green">
              <Spinner type="dots" />
            </Text>
            {" Starting development server..."}
          </Text>
        </Box>
        <Box marginTop={1}>
          <Text>{file ? `Watching file: ${file}` : "No file specified"}</Text>
        </Box>
        {options.env && (
          <Box>
            <Text>Environment: {options.env}</Text>
          </Box>
        )}
        {/* TODO: Implement development server logic */}
      </Box>
    );
  }
}
