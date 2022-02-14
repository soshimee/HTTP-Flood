import fs from "fs";
import { Worker } from "worker_threads";

const config = JSON.parse(fs.readFileSync("config.json"));

for (let i = 0; i < config.threads; i++) {
	new Worker("./worker.js");
}