// function signature --> defines the structure of a function and the function has to follow the structure, otherwise will get a compilation error.
let userInfo1: () => string;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => void;

userInfo1 = () => {
	return "I am 27 years old.";
};


userInfo2 = (name: string) => {
	console.log(name);
};


userInfo3 = (name: string, age: number) => {
	console.log(`Name is ${name}, Age is ${age}`);
};

userInfo1();
userInfo2("Indrajit");
userInfo3("Indrajit", 27);