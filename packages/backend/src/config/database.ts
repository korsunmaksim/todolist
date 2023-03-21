import { ConnectionOptions, connect } from "mongoose";

const connectDB = async () => {
  try {
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(process.env.MONGO_URI, options);
    console.log("MongoDB Connected...");
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
