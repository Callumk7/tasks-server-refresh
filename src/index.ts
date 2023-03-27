import { app } from "./app";
import { config } from "dotenv";

config(); // Load environment variables
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
