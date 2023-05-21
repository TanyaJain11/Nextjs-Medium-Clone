// import mongoose,{mongo} from "mongoose";

// const dbConnect = ()=>{
//         if(mongoose.connection.readyState>=1) return;

//         mongoose.connect(process.env.DB_URI);
// };

// export default dbConnect;

// import mongoose from 'mongoose';

// export const dbConnect = async () => {
//   try {
//     if (mongoose.connection.readyState >= 1) return;

//     await mongoose.connect(process.env.DB_URI);
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//   }
// };




import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.DB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default dbConnect;




// import { MongoClient } from 'mongodb';


// let cachedClient = null;

// export async function connectToDatabase() {
//   if (cachedClient) {
//     return cachedClient;
//   }

//   const client = await MongoClient.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   cachedClient = client;
//   return client;
// }