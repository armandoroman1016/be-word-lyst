import Mongoose = require("mongoose");

export const connectDB = async () => {
    if (process.env.MONGO_URI) {
        try {
            const conn = await Mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            });

            console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
};
