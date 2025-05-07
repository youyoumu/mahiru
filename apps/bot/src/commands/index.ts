import help from "./utility/help";
import login from "./utility/login";
import meme from "./utility/meme";
import ping from "./utility/ping";
import prefix from "./utility/prefix";

export default {
  [ping.data.name]: ping,
  [meme.data.name]: meme,
  [login.data.name]: login,
  [prefix.data.name]: prefix,
  [help.data.name]: help,
};
