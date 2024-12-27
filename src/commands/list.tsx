import React from "react";
import { Box, Text } from "ink";
import Command from "pastel";
import Spinner from "ink-spinner";

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
