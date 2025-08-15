import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://zainabali101032:1122332211@cluster0.a7rmdwk.mongodb.net/food-del')
.then(() => {
        console.log("MongoDB connected successfully");
    });
};
export default connectDB;