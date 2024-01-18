import  express from 'express';
//@expressjsApplication()
const app = express();
app.use(express.json());
import cakeRouter from './routes/cake.route.js';
app.use('/api/v1/cake',cakeRouter )
export default app;