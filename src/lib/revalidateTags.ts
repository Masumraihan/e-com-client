"use server";

import { revalidateTag } from "next/cache";

const revalidateTags = (tags: string) => {
  revalidateTag(tags);
};

export default revalidateTags;
