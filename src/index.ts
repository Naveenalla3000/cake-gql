import { connectDb } from '../dist/prisma/db.config.js';
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDb()
    await app.listen(PORT,()=>{
        console.log(`Server is listening on port ${PORT}.`);
    });
}

startServer();