import { Diet } from "./diet";

export class User {
    constructor(
        public userName?: string,
        public email?: string,
        public img?: string,
        public password?: string,
        public diets?: Array<Diet>,
        public trainings?: null
    ) { }
}