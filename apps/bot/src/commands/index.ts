import help from "./help";
import login from "./login";
import meme from "./meme";
import ping from "./ping";
import prefix from "./prefix";

export default {
  [ping.data.name]: ping,
  [meme.data.name]: meme,
  [login.data.name]: login,
  [prefix.data.name]: prefix,
  [help.data.name]: help,
};
