// Interface

interface IEmployee {
    readonly id: number;  // Can not be modified
    name: string;
    salary?: number;    // optional property
}


let e1: IEmployee = {
    id: 1,
    name: "IP",
    salary: 50000,
}



let e2: IEmployee = {
    id: 2,
    name: "Indrani",
    salary: 100000,
}