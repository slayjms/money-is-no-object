// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

const isAdmin = function(userObj){
    if(userObj.userRole === "ADMIN"){
        return true
    }else{
        return false
    }
}


// const getHardestHomework = function(homeworkArr){

//     let lowestScore = homeworkArr[0].averageScore
//     let lowestName = homeworkArr[0].name
//     for(let i = 0; i < homeworkArr.length; i++){
//         if(homeworkArr[i].averageScore < lowestScore){
//             lowestScore = homeworkArr[i].averageScore
//             lowestName = homeworkArr[i].name
//         }
//     }
//     return lowestName
// }

const getHardestHomework = function(homworkArr){
    //check if homework array is empty
    if(homeworkArr.length === 0){
        return ""
    }
    let lowestScore = homeworkArr[0]
    for(let i = 0; i < homeworkArr.length; i ++){
        if(homeworkArr[i].averageScore < lowestScore.averageScore){
            lowestScore = homeworkArr[i] //if score is less than the 
                                         //lowestScore object, save new object
        }
    }
    return lowestScore.name
}





// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};