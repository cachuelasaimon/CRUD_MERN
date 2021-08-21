import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: "./config.env" });

// Connection To Mongo
let DATABASE: string | undefined = process.env.DATABASE as string;
let PASSWORD: string | undefined = process.env.DATABASE_PASSWORD as string;
let ConnectionString: string = DATABASE.replace("<PASSWORD>", PASSWORD);

let ConnectToMongo = async (ConString: string) => {
  try {
    await mongoose.connect(ConString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log(`Connect to Mongo`);
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  await ConnectToMongo(ConnectionString);

  // Initialize Server
  let port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`Server Started on Port: ${port}`));
})();
