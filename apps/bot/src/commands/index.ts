import login from "./utility/login";
import meme from "./utility/meme";
import ping from "./utility/ping";

export default {
  [ping.data.name]: ping,
  [meme.data.name]: meme,
  [login.data.name]: login,
};
