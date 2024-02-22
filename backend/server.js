import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

// import { connect } from 'mongoose';
import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); // Allows JSON to be sent in the request body
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//   //root route http://localhost:5000/
//   res.send('Hello World!!');
// });

server.listen(PORT, () => {
  connectToMongoDB();
  console.log('server is running on port ' + PORT);
});
