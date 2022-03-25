class User{
    static id =1;
    static cahce ={
        1:'some value',
    };
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.id = User.id++;
    }
    static hasInCache(){
        console.log(this.cahce);
    }
    static compareAge(user1,user2){
        return user1.age - user2.age;
    }
}

const user1 = new User('naveen',44);
const user2 = new User('sachin',84);
const user3 = new User('vipin',24);
const user4 = new User('virat',14);

const users = [user1,user2,user3,user4];

//array sort
// users.sort((a,b)=>a.age - b.age);
// users.sort(User.compareAge)
console.log(users);
console.log(User.hasInCache());
class Config{
    static dbUser = 'naveen';
    static dbPassword = 'secret';
    static apiToken = 'abcd';
}
console.log(Config.dbUser);