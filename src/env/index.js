import { config } from "dotenv";

export function initialize() {
  const env = config();
  if (env.error) {
    console.error("error initializing .env: ", env.error.message);
  } else {
    console.log(".env initialized, fields available: ", Object.keys(env.parsed).join(", "));
  }

}
