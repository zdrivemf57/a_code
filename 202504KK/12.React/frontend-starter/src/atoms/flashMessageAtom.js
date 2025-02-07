import { atomWithReset } from "jotai/utils";

export const flashMessageAtom = atomWithReset({
  showMessage: false,
  messageBody: ""
});
