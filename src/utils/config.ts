import { z } from "npm:zod";

const ConfigSchema = z.object({
  apiUrl: z.string().default("https://platform.flatfile.com/api"),
  token: z.string().optional(),
  environment: z.string().optional(),
  agentSlug: z.string().optional(),
  verbose: z.boolean().default(false),
});

export type Config = z.infer<typeof ConfigSchema>;

export function getConfig(options: Partial<Config> = {}): Config {
  const config = {
    apiUrl: Deno.env.get("FLATFILE_API_URL"),
    token:
      Deno.env.get("FLATFILE_API_KEY") || Deno.env.get("FLATFILE_BEARER_TOKEN"),
    environment: Deno.env.get("FLATFILE_ENVIRONMENT_ID"),
    agentSlug: Deno.env.get("FLATFILE_AGENT_SLUG"),
    verbose:
      Deno.env.get("VERBOSE") === "true" || Deno.env.get("DEBUG") === "true",
    ...options,
  };

  return ConfigSchema.parse(config);
}

export function debug(message: string, data?: unknown) {
  if (Deno.env.get("VERBOSE") === "true" || Deno.env.get("DEBUG") === "true") {
    console.log(`[DEBUG] ${message}`);
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
  }
}
