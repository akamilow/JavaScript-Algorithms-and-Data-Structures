/*
Maria plays college basketball and wants to go pro.
Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.

scores = [12, 24, 10, 24]

Scores are in the same order as the games played. She tabulates her results as follows:
                                Count
Game  Score  Minimum  Maximum   Min Max
 0      12     12       12       0   0
 1      24     12       24       0   1
 2      10     10       24       1   1
 3      24     10       24       1   1
*/
function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        } else if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }
    }
    return [maxCount, minCount];
}
console.log(breakingRecords([12, 24, 10, 24]));