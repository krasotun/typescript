import { returnGreeting } from "./greetings_module";
import * as allGreetingFunctions from "./greetings_module.js"; // imports all exported components in the module
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module";

returnGreeting("Hola!"); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting("Bonjour"); // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength("Ciao!");
