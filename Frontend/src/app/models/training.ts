export class Training{
    constructor(
        public _id: string,
        public name: string,
        public category: string,
        public difficulty: string,
        public content: String,
        public urlVideo: string,
        public image: string
    ) {}
}