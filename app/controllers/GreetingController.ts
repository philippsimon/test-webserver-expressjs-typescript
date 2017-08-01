import { NextFunction, Request, Response } from 'express';
import * as _ from 'lodash';

import { Greeting } from 'app/models/Greeting';

export class GreetingController {

    private static template = _.template('Hello, <%= name %>!');
    private counter = 0;

    constructor() {
        // bind handle to itself so it doesn't need to get bound in server
        this.handle =  this.handle.bind(this);
    }

    /**
     * express.js handler. Gets bound to the GreetingController in the constructor.
     *
     * @param req
     * @param res 
     * @param next
     */
    public handle(req: Request, res: Response, next: NextFunction): void {
        const id = this.counter += 1;
        const content = GreetingController.template({ name: req.query.name || 'World' });
        const greeting = new Greeting(id, content);

        res.json(greeting);
    }
}
