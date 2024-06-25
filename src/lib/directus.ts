import { createDirectus, deleteItem, rest } from "@directus/sdk";

const directus = createDirectus("http://localhost:8055").with(
  rest({
    onRequest: (options) => ({ ...options } as any),
  })
);

export default directus;
