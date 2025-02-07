import { atomWithReset } from "jotai/utils";

export const itemPageAtom = atomWithReset({
  currentPage: 1,
  totalPages: 1
});
