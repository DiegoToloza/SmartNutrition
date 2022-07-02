export class LogInUser{
    constructor(
        public username: string,
        public email: string,
        public password: string,
        public passwordCheck: string
    ) {}
}