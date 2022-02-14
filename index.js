import fs from "fs";
import fetch from "node-fetch";

const config = JSON.parse(fs.readFileSync("config.json"));

for (let i = 0; i < config.threads; i++) {
	setInterval(async () => {
		fetch(config.url).catch(() => {});
	}, 0);
}