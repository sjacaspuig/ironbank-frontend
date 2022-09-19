import { Role } from "../types/role";

export class User {
    _username: string;
    _role: Role;


    constructor(username: string, role: Role) {
        this._username = username;
        this._role = role;
    }

    get username(): string {
        return this._username;
    }

    get role(): Role {
        return this._role;
    }
}