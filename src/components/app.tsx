import React from "npm:react@18";
import { Box } from "npm:ink@5";
import { Hello } from "../commands/hello.tsx";
import { List } from "./list.tsx";

interface AppProps {
  command: string;
  args: Record<string, unknown>;
}

export const App: React.FC<AppProps> = ({ command, args }) => {
  return (
    <Box>
      {command === "hello" && <Hello name={args.name as string} />}
      {command === "list" && <List type={args.type as string} />}
    </Box>
  );
};
