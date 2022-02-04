function saturdayFun(satActivity = "roller-skate"){
    const satSentence = "This Saturday, I want to " + `${satActivity}!`;
    return satSentence;
}

saturdayFun();

const mondayWork = function(monActivity = "go to the office"){
    const monSentence = `This Monday, I will ${monActivity}.`;
    return monSentence;
}

mondayWork();

function wrapAdjective(emphasis = "*"){
    const part1 = "You are ";
    return function(emphatic = "special"){
        const part2 = emphatic;
        const encouragingSentence = `${part1}${emphasis}${part2}${emphasis}!`;
        return encouragingSentence;
    };
}

wrapAdjective()();