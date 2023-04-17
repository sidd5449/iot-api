import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fillRouter from './routes/fillRouter.js'
import releaseRouter from './routes/releaseRouter.js'

dotenv.config();
const app = express();
app.use(cors());

const PORT = 8080;
app.use('/fill', fillRouter);
app.use('/release', releaseRouter);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`))
}).catch((err) => console.log(err.message));