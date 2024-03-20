// user-defined types

// Enum (short for enumeration) type - It is a way to give more friendly names to sets of numeric values. 
// Enums provide a meaningful way to represent a group of related constants or values.
// If we use const while defining enum then compiler will generate a more optimized JS code
// Duplicate values not allowed here
// numeric, string, heterogeneous


// numeric enum
enum Size { Small = 1, Medium = 2, Large = 3 }; // Pascal Naming Conventions
let mySize: Size = Size.Small; 
console.log(mySize);

// The assignment of numeric values is optional, and if not provided, TypeScript will 
// automatically assign incremental numeric values starting from 0.




enum RequestType {
    ReadData = 1,
    SaveData = 5,
    DeleteData,
}


console.log(RequestType);
console.log(RequestType.ReadData);
console.log(RequestType["ReadData"]);

/*
Case 1:
enum RequestType {
    ReadData,
    SaveData,
    DeleteData,
}

Output:
{
  '0': 'ReadData',  
  '1': 'SaveData',  
  '2': 'DeleteData',
  ReadData: 0,      
  SaveData: 1,      
  DeleteData: 2     
}

Case 2:
enum RequestType {
    ReadData = 1,
    SaveData = 5,
    DeleteData,
}


Output:
{
  '1': 'ReadData',  
  '5': 'SaveData',  
  '6': 'DeleteData',
  ReadData: 1,      
  SaveData: 5,      
  DeleteData: 6     
}

*/


// string enum
enum RequestType2 {
    ReadData = "READ_DATA",
    DeleteData = "DELETE_DATA"
}

console.log(RequestType2);

/*
Output:
{ ReadData: 'READ_DATA', DeleteData: 'DELETE_DATA' }

*/



// Heterogeneous enum
enum RequestType3 {
    ReadData = "READ_DATA",
    DeleteData = "DELETE_DATA",
    id = 101
}

console.log(RequestType3);

/*

{
  '101': 'id',
  ReadData: 'READ_DATA',
  DeleteData: 'DELETE_DATA',
  id: 101
}

*/



