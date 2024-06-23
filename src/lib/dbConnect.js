import mongoose from 'mongoose';

export const connectDb = async () => {
  mongoose.set('strictQuery', true);
  mongoose.set('strictPopulate', true);
  let isConnected = false;
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
