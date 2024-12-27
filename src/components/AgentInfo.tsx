import React from "react";
import { Box, Text } from "ink";

interface AgentInfoProps {
  agents: Array<{
    id: string;
    slug: string;
    topics?: string[];
  }>;
  showTopics?: boolean;
}

export function AgentInfo({ agents, showTopics = false }: AgentInfoProps) {
  return (
    <Box flexDirection="column" marginY={1}>
      {agents.map((agent) => (
        <Box key={agent.id} flexDirection="column" marginBottom={1}>
          <Text>
            <Text color="blue">{agent.slug || "<no-slug>"}</Text>
            <Text color="gray"> ({agent.id})</Text>
          </Text>
          {showTopics && agent.topics && agent.topics.length > 0 && (
            <Box marginLeft={2}>
              <Text color="gray">Topics: {agent.topics.join(", ")}</Text>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
