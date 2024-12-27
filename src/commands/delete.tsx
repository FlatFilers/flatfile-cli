import React from "npm:react";
import { Box, Text } from "npm:ink";
import Command from "npm:pastel";
import Spinner from "npm:ink-spinner";

interface DeleteOptions {
  slug?: string;
  agentId?: string;
  token?: string;
  apiUrl?: string;
}

export default class DeleteCommand extends Command {
  static path = ["delete"];
  static description = "Delete an Agent";
  static options = {
    "--slug, -s": "The slug of the agent to delete",
    "--agentId, -ag": "The id of the agent to delete",
    "--token, -k":
      "The authentication token to use (or set env FLATFILE_API_KEY)",
    "--api-url": "The API URL to use (or set env FLATFILE_API_URL)",
  };

  async execute(options: DeleteOptions) {
    if (!options.slug && !options.agentId) {
      return (
        <Box>
          <Text color="red">
            Error: Must provide either --slug or --agentId
          </Text>
        </Box>
      );
    }

    return (
      <Box flexDirection="column">
        <Box>
          <Text>
            <Text color="red">
              <Spinner type="dots" />
            </Text>
            {" Deleting agent..."}
          </Text>
        </Box>
        <Box marginTop={1}>
          <Text>
            {options.slug
              ? `Deleting agent with slug: ${options.slug}`
              : `Deleting agent with ID: ${options.agentId}`}
          </Text>
        </Box>
        {/* TODO: Implement agent deletion logic */}
      </Box>
    );
  }
}
