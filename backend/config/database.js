import mongoose from "mongoose";



// export const connectDB = ()=>{
//     mongoose.connect(process.env.MONGO_URI)
//     .then((c)=>{
//         console.log(`MongoDB connects to: ${c.connection.host}`)
//     }).catch((e)=>{
//         console.log(e);
//     })
// }

export const connectDB = async ()=>{
    try {
       const c = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connects to: ${c.connection.host}`);
    } catch (e) {
        console.log(e);
    }
}