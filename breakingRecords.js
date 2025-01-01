/**
 * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
 * She tabulates the number of times she breaks her season record for most points and least points in a game. 
 * Points scored in the first game establish her record for the season, and she begins counting from there.
 * example: scores = [12,24,10,24]
 */

scores = [12, 24, 10, 24]
let min = scores[0]
let max = scores[0]
let fmin = 0
let fmax = 0
scores.forEach((score) => {
    if (score < min) {
        fmin += 1
        min = score
    } else if (score > max){
        fmax += 1
        max = score
    }
})
console.log(fmin, fmax)

// using reduce method
