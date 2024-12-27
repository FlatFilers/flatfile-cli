import React from "npm:react";
import { Box, Text } from "npm:ink";
import Command from "npm:pastel";
import Spinner from "npm:ink-spinner";

interface ListOptions {
  token?: string;
  apiUrl?: string;
  withTopics?: boolean;
}

export default class ListCommand extends Command {
  static path = ["list"];
  static description = "List deployed Agents";
  static options = {
    "--token, -k":
      "The authentication token to use (or set env FLATFILE_API_KEY)",
    "--api-url": "The API URL to use (or set env FLATFILE_API_URL)",
    "--with-topics, -t": "Display the topics for each agent",
  };

  async execute(options: ListOptions) {
    return (
      <Box flexDirection="column">
        <Box>
          <Text>
            <Text color="green">
              <Spinner type="dots" />
            </Text>
            {" Fetching deployed agents..."}
          </Text>
        </Box>
        {/* TODO: Implement agent listing logic */}
        <Box marginTop={1}>
          <Text>
            {options.withTopics
              ? "Including topics in listing"
              : "Basic listing"}
          </Text>
        </Box>
      </Box>
    );
  }
}
