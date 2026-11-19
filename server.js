import 'dotenv/config';
import express from 'express';
import connection from './db/connection.js';
import bookRoutes from './routes/bookRoutes.js';

connection.then(()=>{console.log('Connected to MongoDb successfully')})
.catch((e)=>{console.log(e)});
const app=express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello')
})
app.use('/api',bookRoutes)


app.listen(port, ()=>{
    console.log('Server running at port: '+ port)
})