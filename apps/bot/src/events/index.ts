import interactionCreate from "./interactionCreate";
import messageCreate from "./messageCreate";
import messageReactionAdd from "./messageReactionAdd";
import ready from "./ready";

export default {
  [interactionCreate.name]: interactionCreate,
  [ready.name]: ready,
  [messageCreate.name]: messageCreate,
  [messageReactionAdd.name]: messageReactionAdd,
};
