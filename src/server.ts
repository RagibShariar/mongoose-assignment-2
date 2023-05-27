import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Database Connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-assignment");
    console.log("Database Connection Successful... :)");

    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(`failed to connect database`, err);
  }
}
bootstrap();
