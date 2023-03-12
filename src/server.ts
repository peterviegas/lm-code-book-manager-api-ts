import * as dotenv from "dotenv";
const environment = process.env.NODE_ENV || "dev";
dotenv.config({ path: `.env.${environment}` });

import { app } from "./app";
import { populateDummyData } from "./database/database_seed";
import { Sequelize } from 'sequelize';
console.log(process.env.NODE_ENV)
console.log(process.env.PORT)
console.log(process.env.DB_NAME)
console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_HOST)
console.log(process.env.DB_DIALECT)








//const environment = process.env.NODE_ENV || "dev";
//const PORT = 3000;
const PORT = process.env.PORT;
console.log("Porta:", PORT)

console.log(`🌍 Running in ${environment} environment`);

app.listen(PORT, () => {
	console.log(`🚂 Express started on port ${PORT}`);

	// Seed the database with some data
	if (environment === "dev") {
		populateDummyData();
	}
});
