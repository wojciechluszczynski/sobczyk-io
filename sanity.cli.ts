import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./src/sanity/env";

// Used by the Sanity CLI (`sanity dev` / `sanity deploy` / `sanity schema deploy`).
// `studioHost` fixes the deployed URL to https://sobczyk-io.sanity.studio so the
// deploy is non-interactive and the editor link stays stable for the client.
export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "sobczyk-io",
  deployment: { appId: "bkd11drhzuvmw0c4w5rszz0g" },
  autoUpdates: true,
});
