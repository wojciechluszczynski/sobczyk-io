import { createClient } from "next-sanity";
import { apiVersion, dataset, hasSanity, projectId } from "./env";

// Client is only created when a project is connected. Reads use the CDN and the
// public dataset, so no token is required for v1.
export const client = hasSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
