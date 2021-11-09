const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(item){
    return item.Stage === 'Final' && item.Year === 2014;
});
console.log(finals2014);
//(a) Home Team name for 2014 world cup final
console.log('task 1a', finals2014[0] ['Home Team Name']);
//(b) Away Team name for 2014 world cup final
console.log('task 1b', finals2014[0] ['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
console.log('task 1c', finals2014[0] ['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
console.log('task 1d', finals2014[0] ['Away Team Goals']);
//(e) Winner of 2014 world cup final */
console.log('task 1e', finals2014[0] ['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/
// receive an array as the parameter - note this will be fifa data as the argument
function getFinals(array) {
   // you can use filter here and stage === final
    const finalTeams = array.filter(function(item){
        return item.Stage === "Final";
    });
    return finalTeams;
}

console.log('task 2');
// console.log('task 2', getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/
// 2 param array and getfinalscb
function getYears(array, getFinalscb) {
    // map over results of getFinalscb
    const years = getFinalscb(array).map(function(item){
        return item.Year;
    });
    // use map to get an array with the data that has been filtered
    return years;
}

console.log('task 3', getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 
// 2 param array and getFinalscb
// compare goals
function getWinners(array, getFinalscb) {
    // if else statement using map with a conditional if home team goals > away team goals then we want the home team name else we want away team name
    const  winners = getFinalscb(array).map(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name'];
        }else{
            return item['Away Team Name'];
        };
    })
    return winners;
}

console.log('task 4', getWinners(fifaData, getFinals))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */
// 4 parameters array, getFinalscb, getYearscb, getWinnerscb
function getWinnersByYear(array, getFinalscb, getYearscb, getWinnerscb) {
    // use map over one array and grab each item then use the index to grab the item in the other array
    const winners = getWinnerscb(array, getFinalscb);
    const years = getYearscb(array, getFinalscb);
    const winnersByYear = winners.map(function(item, index){
        return `In ${years[index]}, ${item} won the world cup!`;
    });
    return winnersByYear;
}

console.log('task 5', getWinnersByYear(fifaData, getFinals, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/
// parameters getFinalscb
function getAverageGoals(getFinalscb) {
   // use .reduce to add up all the goals of home and away team
   const averageGoals = getFinalscb.reduce(function(accumulator, item){
    return accumulator + item['Home Team Goals'] + item['Away Team Goals'];
   },0)
   // divide that number by the length of the array
   return (averageGoals / getFinalscb.length).toFixed(2);
   // round to 2 decimal places **hint look up toFixed()
}

console.log('task 6', getAverageGoals(getFinals(fifaData)));


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
