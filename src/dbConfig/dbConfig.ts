import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connected',()=> {
            console.log('Mongo connect success')
        })
    } catch (error) {
        console.log('Something goes wrong')
        console.log(error)
    }
}