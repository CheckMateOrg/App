import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import { getReviewsByIds } from "$lib/server/database";

export const GET = (async ({ url }) => {
  const ids = (url.searchParams.get("ids") ?? "").split(",");
  return json({ data: await getReviewsByIds(ids) });
}) satisfies RequestHandler;
