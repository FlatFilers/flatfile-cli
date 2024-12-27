import React from "react@18";
import { Text, Box } from "ink@5";

interface ListProps {
  type: string;
}

export const List: React.FC<ListProps> = ({ type }) => {
  return (
    <Box flexDirection="column">
      <Text color="blue">📋 Listing resources of type: {type}</Text>
      <Box marginTop={1}>
        <Text>• Example resource 1</Text>
      </Box>
      <Box>
        <Text>• Example resource 2</Text>
      </Box>
      <Box>
        <Text>• Example resource 3</Text>
      </Box>
    </Box>
  );
};
