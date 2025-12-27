class Person {
    protected name : string ; 

    constructor(name : string) {
        this.name = name ; 
    }

    protected getDetails() : string {
        return `Person Name: ${this.name}` ;
    }
}


class Employee extends Person {
    private role : string ; 

    constructor(name : string , role : string) {
        super(name) ;
        this.role = role ; 
    }
    //method overriding 
    protected getDetails(showRole : boolean): string {
        if(showRole) {
            return `Employee Name: ${this.name} , Role: ${this.role}` ;
        }

        return `Employee Name: ${this.name}` ;
    }
}


const rahul = new Employee("Rahul" , "Engineer"); 

rahul.role; 
rahul.name; 