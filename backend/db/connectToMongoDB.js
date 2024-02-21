import mongoose from 'mongoose';

// const MONGO_DB_URI =
//   'mongodb+srv://okoid721:Okoid721@cluster0.aw8sp2l.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0';
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting', error.message);
  }
};

export default connectToMongoDB;
