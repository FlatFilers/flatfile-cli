import React from "npm:react";
import { Box, Text } from "npm:ink";
import Command from "npm:pastel";
import Spinner from "npm:ink-spinner";

interface DeployOptions {
  slug?: string;
  topics?: string;
  token?: string;
  verbose?: boolean;
  apiUrl?: string;
}

export default class DeployCommand extends Command {
  static path = ["deploy"];
  static description = "Deploy your project as a Flatfile Agent";
  static options = {
    "--slug, -s":
      "The slug of the project to deploy (or set env FLATFILE_AGENT_SLUG)",
    "--topics, -t":
      "List of topics to listen on (eg: 'commit:created,commit:updated')",
    "--token, -k":
      "The authentication token to use (or set env FLATFILE_API_KEY)",
    "--verbose, -v": "Enable verbose logging",
    "--api-url": "The API URL to use (or set env FLATFILE_API_URL)",
  };

  async execute(options: DeployOptions, file?: string) {
    return (
      <Box flexDirection="column">
        <Box>
          <Text>
            <Text color="green">
              <Spinner type="dots" />
            </Text>
            {" Deploying agent..."}
          </Text>
        </Box>
        <Box marginTop={1}>
          <Text>{file ? `File: ${file}` : "No file specified"}</Text>
        </Box>
        {options.slug && (
          <Box>
            <Text>Slug: {options.slug}</Text>
          </Box>
        )}
        {/* TODO: Implement actual deployment logic */}
      </Box>
    );
  }
}
