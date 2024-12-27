import { useEffect, useState } from "react";
import { Box, Text, useApp } from "ink";
import { argument } from "pastel";
import zod from "zod";
import { Spinner } from "../components/Spinner.tsx";
import { AgentInfo } from "../components/AgentInfo.tsx";
import { getConfig, debug } from "../utils/config.ts";

export const options = zod.object({
  slug: zod.string().optional().describe("The slug of the project to deploy"),
  topics: zod.string().optional().describe("List of topics to listen on"),
  token: zod.string().optional().describe("The authentication token to use"),
  verbose: zod.boolean().optional().describe("Enable verbose logging"),
  apiUrl: zod.string().optional().describe("The API URL to use"),
});
export const args = zod.tuple([
  zod.string().describe(
    argument({
      name: "file",
      description: "The path to the file to deploy",
    })
  ),
]);

type Props = {
  options: zod.infer<typeof options>;
  args: zod.infer<typeof args>;
};

type DeployState =
  | { status: "initializing" }
  | { status: "building" }
  | { status: "validating" }
  | { status: "deploying" }
  | { status: "success"; agentId: string; slug: string }
  | { status: "error"; message: string };

export default function Deploy({ options, args }: Props) {
  const { exit } = useApp();
  const [file] = args;
  const [state, setState] = useState<DeployState>({ status: "initializing" });

  // const [existingAgents, setExistingAgents] = useState<
  //   Array<{ id: string; slug: string }>
  // >([]);

  useEffect(() => {
    async function deploy() {
      try {
        const config = getConfig(options);
        debug("Starting deployment", { file, config });

        // Build phase
        setState({ status: "building" });
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated build

        // Validate phase
        setState({ status: "validating" });
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated validation

        // Deploy phase
        setState({ status: "deploying" });
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated deployment

        // Success
        setState({
          status: "success",
          agentId: "agent_123", // Replace with actual agent ID
          slug: options.slug || "default-agent",
        });

        // Exit after success
        setTimeout(() => exit(), 1000);
      } catch (error) {
        setState({
          status: "error",
          message:
            error instanceof Error ? error.message : "Unknown error occurred",
        });
      }
    }

    void deploy();
  }, []);

  return (
    <Box flexDirection="column">
      {state.status === "initializing" && (
        <Spinner text="Initializing deployment..." />
      )}

      {state.status === "building" && (
        <Spinner text="Building deployable package..." />
      )}

      {state.status === "validating" && (
        <Spinner text="Validating package..." />
      )}

      {state.status === "deploying" && (
        <Spinner text="Deploying to Flatfile..." />
      )}

      {state.status === "success" && (
        <Box flexDirection="column">
          <Text color="green">✓ Deployment successful!</Text>
          <AgentInfo
            agents={[
              {
                id: state.agentId,
                slug: state.slug,
              },
            ]}
          />
        </Box>
      )}

      {state.status === "error" && (
        <Text color="red">Error: {state.message}</Text>
      )}

      {file && (
        <Box marginTop={1}>
          <Text>File: {file}</Text>
        </Box>
      )}
    </Box>
  );
}
