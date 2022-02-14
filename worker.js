import fetch from "node-fetch";
import fs from "fs";

const config = JSON.parse(fs.readFileSync("config.json"));

setInterval(async () => {
	fetch(config.url).catch(() => {});
}, 0);