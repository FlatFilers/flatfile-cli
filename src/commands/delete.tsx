import React from "npm:react";
import { Box, Text } from "npm:ink";
import Spinner from "npm:ink-spinner";
import zod from "npm:zod";

export const options = zod.object({
  slug: zod.string().optional().describe("The slug of the agent to delete"),
  agentId: zod.string().optional().describe("The id of the agent to delete"),
  token: zod
    .string()
    .optional()
    .describe("The authentication token to use (or set env FLATFILE_API_KEY)"),
  apiUrl: zod
    .string()
    .optional()
    .describe("The API URL to use (or set env FLATFILE_API_URL)"),
});

type Props = {
  options: zod.infer<typeof options>;
};

export default function Delete({ options }: Props) {
  if (!options.slug && !options.agentId) {
    return (
      <Box>
        <Text color="red">Error: Must provide either --slug or --agentId</Text>
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
