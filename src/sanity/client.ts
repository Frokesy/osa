import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "hnl0hpi6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
