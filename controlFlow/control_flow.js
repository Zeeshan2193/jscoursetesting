let userRole = "admin";
let accessLevel

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);


if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, admin!"
    }
    else{
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please Log in To Access the System"
}
console.log("User Message:", userMessage)
if (userRole === "admin"){
    accessLevel = "Full access granted";
}else if (userRole === "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted";
}

console.log("Aceess Level:", accessLevel)