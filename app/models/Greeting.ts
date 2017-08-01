export class Greeting {

    constructor(
        private id: number,
        private content: string
    ) {}

    public toJSON() {
        return {
            id: this.id,
            content: this.content
        };
    }

}
