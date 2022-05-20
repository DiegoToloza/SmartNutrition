export class LogInUser{
    constructor(
        public userName: string,
        public email: string,
        public password: string,
        public passwordCheck: string
    ) {}
}