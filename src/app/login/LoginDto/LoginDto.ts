export class LoginDto {
    private username: string;
    private password: string;
    private userType: string;

    constructor(userName: string, password: string, userType: string) {
        this.username = userName;
        this.password = password;
        this.userType = userType;
    }
}
