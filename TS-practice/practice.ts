class Person{
    private name: string;
    private age: number;   
    private id: number;

    constructor(name: string, age: number, id: number){
        this.name = name;
        this.age = age;
        this.id = id;
    } 

    public getName(): string{
        return this.name;
    }
    public getAge(): number{
        return this.age;
    }
    public getId(): number{
        return this.id;
    }

    public setName(name: string): void{
        this.name = name;
    }
    public setAge(age: number): void{
        this.age = age;
    }
    public setId(id: number): void{
        this.id = id;
    } 

    public printInfo(): void{  
        console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`);
    }
}