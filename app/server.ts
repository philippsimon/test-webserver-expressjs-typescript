import * as express from 'express';

import { GreetingController } from 'app/controllers/GreetingController';

const app = express();

app.get('/greeting', new GreetingController().handle);

app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});
