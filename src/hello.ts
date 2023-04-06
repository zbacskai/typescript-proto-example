import { AddressBook, Person } from './generated/src/proto/addressBook_pb';
import { Zolo } from './shit/norm';

console.log(Zolo);

var greet: string = "Greetings"; 
var geeks: string = "GeeksforGeeks"; 
console.log(greet + " from " + geeks); 
// save the file as hello.ts 



const phoneNr1 : Person.PhoneNumber = new Person.PhoneNumber();
phoneNr1.setPhonenumber('+36-1-234-4455')
//phoneNr1.setPhonetype(Person.PhoneType.MOBILE);
phoneNr1.setPhonetype(Person.PhoneType["MOBILE"]);

const person : Person = new Person();
person.addPhones(phoneNr1)

const addressBook : AddressBook = new AddressBook();
addressBook.addPeople(person);


const encodedMsg = addressBook.serializeBinary();
console.log(encodedMsg);

console.log(`MOBILE ${Person.PhoneType["MOBILE"]}`);
console.log(`HOME ${Person.PhoneType["HOME"]}`);
console.log(`WORK ${Person.PhoneType["WORK"]}`);