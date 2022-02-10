import fs from "fs";
import fetch from "node-fetch";

const config = JSON.parse(fs.readFileSync("config.json"));
let conn = 0;

for (let i = 0; i < config.threads; i++) {
	setInterval(async () => {
		try {
			await fetch(config.url);
		} catch {}
		console.log(++conn);
	}, 0);
}