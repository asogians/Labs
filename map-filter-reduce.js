"use strict"
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let threeLangs = users.filter(users => users.languages.length >= 3);
console.log(threeLangs);

let arrayEmails = users.map(users => users.email);
console.log(arrayEmails);

let avgYears = users.reduce((accumulation, user) => {
    return accumulation + user.yearsOfExperience/users.length;

}, 0);
console.log(avgYears);

let longestEmail = users.reduce((accumlator, user) => {
    if (user.email.length > accumlator.length){
        accumlator = user.email;
    }
    return accumlator;
}, "");
console.log(longestEmail);

let stringNames = users.reduce((accumulator, user)=>{
    if(user.id === users.length){
        return ` ${accumulator + user.name}.`;
    } else {
        return ` ${accumulator + user.name}, `;
    }
},"Your instructors are ");
console.log(stringNames);

let uniqueLangs = users.reduce((accumulator, user)=>{
    let langs = "";
    user.languages.forEach((lang, i)=>{
        if(langs.indexOf(lang[i]) === -1 ){
            langs += lang[i];
            console.log(lang[i]);
        }
    })
},"Uninque ");
console.log(uniqueLangs);
