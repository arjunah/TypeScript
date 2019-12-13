class Person {
    constructor (private name: string, private age: number) {
        
    }

    getName () {
        return this.name;
    }
}

const user = new Person ("Hristo", 36);
const username = user.getName();
const privateName = (user as any).name;

console.log(username, privateName);