export class LoginDto {
    public username: string;
    public password: string;
    public userType: string;

    constructor(userName: string, password: string, userType: string) {
        this.username = userName;
        this.password = password;
        this.userType = userType;
    }
}
