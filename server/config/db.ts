import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI || '');
    console.log( colors.cyan.underline.bold(`Connected to MongoDB ${connection.connection.host}`));
  } catch (error) {
    console.error(colors.red.underline.bold('Error connecting to MongoDB'), error);
    process.exit(1);
  }
};

export default connectDB;