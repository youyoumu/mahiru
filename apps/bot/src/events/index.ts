import interactionCreate from "./interactionCreate";
import ready from "./ready";

export default {
  [interactionCreate.name]: interactionCreate,
  [ready.name]: ready,
};
