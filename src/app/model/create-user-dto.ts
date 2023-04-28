export class CreateUserDto {
    username:string;
    cellphone:string;
    age:string;
    userid:string;
    email:string;
    password:string;
    constructor(username:string, cellphone:string, age:string, userid:string, email:string, password:string){
        this.username = username;
        this.cellphone = cellphone;
        this.age=age;
        this.userid= userid;
        this.email= email;
        this.password = password;
    }
}
