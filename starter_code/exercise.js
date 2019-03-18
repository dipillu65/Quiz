var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    
    return "Hello"
    return 'Error: Question 01 not implemented';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    return [1,2,3,4,5]
    return 'Error: Question 02 not implemented';
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------

    var People = {
        name: "Amanda",
        age: "26"
    }
    return People;
    return 'Error: Question 03 not implemented';
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var Objects = [{},{},{}];
    return Objects;
    return 'Error: Question 04 not implemented';
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    return someObject.name = "Dipo";
    return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    return someArray[2];
    return 'Error: Question 06 not implemented';
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    return string1 + " " + string2 + " " + string3;
    return 'Error: Question 07 not implemented';
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    
    return someNumbers.filter( el => el > 6);
    return 'Error: Question 08 not implemented';
};

exercise.getNames = function(people){
    // ----------------------------------------
    //   QUESTION 09
    //   Return a new array with
    //   the "name" property values.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', age:18},
    //         {name:'bruce', age:22},
    //         {name:'clark', age:25},
    //         {name:'diana', age:29}
    //   ];
    //
    //   You should return
    //     ['peter','bruce','clark','diana']
    // ----------------------------------------
    names = []
   for(i=0; i < people.length; i++){
       names.push(people[i].name)
   }return names;
    return 'Error: Question 09 not implemented';
};

exercise.getSalaryTotal = function(people){
    // ----------------------------------------
    //   QUESTION 10
    //   Return the sum of all the
    //   salaries in array.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', salary:1000},
    //         {name:'bruce', salary:2000},
    //         {name:'clark', salary:3000},
    //         {name:'diana', salary:4000}
    //     ];
    //
    //   you should return
    //     10000
    // ----------------------------------------
    let sum = 0;
    for(i=0;i<people.length;i++){
        
        sum += people[i].salary;
    }return sum;
    return 'Error: Question 10 not implemented';
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    return someNumbers.sort((a,b) => a - b);
    return 'Error: Question 11 not implemented';
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return callback();
    return 'Error: Question 12 not implemented';
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    people = [];
    for(i=0;i < payroll.length; i++){
    people.push([payroll[i][1],payroll[i][2]]);
    }return people;
    return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    payNum = []
    for(i=0;i<payroll.length;i++){
        payNum.push(parseInt(payroll[i][3]));
    }
    var total = payNum.reduce((total, current) => total + current, 0)
    return total
    return 'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    payNumPeople = []
    overTarget = 0
    for(i=0;i<payroll.length;i++){
        if(parseInt(payroll[i][3]) > target ){
            overTarget += 1;
            payNumPeople.push([payroll[i][1],parseInt(payroll[i][3])]); //Names and payroll array
        }
    }return overTarget

    return 'Error: Question 15 not implemented';
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    zipNum = []
    count = 0
    for(i=0;i<payroll.length;i++){
        zipNum.push(parseInt(payroll[i][4]));
    } 
    for (i in zipNum) {
            if( i % 10 == num){
              count ++;
              break;
            }
    }return count
    return 'Error: Question 16 not implemented';
};

module.exports = exercise;
