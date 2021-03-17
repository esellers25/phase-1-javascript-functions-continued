// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(routine="go to the office") {
    return `This Monday, I will ${routine}.`
}

function wrapAdjective(string="*") {
    return function(element="special") {
        return `You are ${string}${element}${string}!`;
    }
}