import app from "./app";
import "./database";

app.listen(app.get("port"));
console.log(`Server listening on http://localhost:${app.get("port")}`);
