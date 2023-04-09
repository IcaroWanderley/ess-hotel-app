import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port =  3000;

var allowCrossDomain = (req: Request, res: Response, next: any) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Request-With, content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(express.json());
// example of componenet routers app.use('component', componentRouter);

/*app.get('/', (req: Request, res: Response, next: any) => {
    res.send('Express + TypeScript Server');
});*/

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
