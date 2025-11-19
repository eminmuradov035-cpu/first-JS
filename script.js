let username = "Emin"
const age = 22
const isStudent = true
const scores = [5, 7, 10, 12]
const person = {
    height: 183,
    weight: 100
}
function checkEligibility (age, isStudent) {
    if (age < 18 && isStudent){
        return "Eligibility for student disocount"
    } else if (age < 18) {
        return "Eligibility for teacehr disocount"
    } else {
        return "Not Eligibility for disocount"
    }
}

function averageScore(scores) {
    let total = scores[0] + scores[1] + scores[2];
    let average = total / 3;
    return average;
}

if (checkEligibility(age, isStudent)) {
    console.log("You qualify!");
} else {
    console.log("You do not qualify.");
}

console.log("Average score:", averageScore(scores));