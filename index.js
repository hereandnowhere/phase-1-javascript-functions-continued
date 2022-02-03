// I THINK THERE IS A BUG IN THE TESTS, THIS WORKS PERFECTLY IN REPLIT, AND ITS DEMONSTRATING 
// WHAT WE LEARNED IN THIS MODULE
// I TRULY DON'T KNOW WHAT I AM DOING WRONG...I'VE WASTED TO MUCH TIME IN THIS LAB JUST TRYING TO DEBUG AND TRY DIFFERENT METHODS WITH THIS
// I GOT TO MOVE ON BUT I WILL BRING IT UP WITH YOU LATER LAURA


const saturdayFun = function(satActivity = "roller-skate"){
    console.log("This Saturday, I want to " + `${satActivity}!`);
    return;
}

console.log(saturdayFun());

const mondayWork = function(monActivity = "go to the office"){
    console.log(`This Monday, I will ${monActivity}.`);
    return;
}

mondayWork();

function wrapAdjective(emphasis = "*"){
    const part1 = "You are ";
    return function(emphatic = "special"){
        const part2 = emphatic;
        return console.log(`${part1} ${emphasis} ${part2} ${emphasis}!`);
    };
}

wrapAdjective()();