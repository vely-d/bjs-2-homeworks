function compareArrays(arr1, arr2) {
    return arr1.every((element, index) => arr2[index] === element) && arr2.every((element, index) => arr1[index] === element);
}

function getUsersNamesInAgeRange(users, gender) {
    let consideredUsers = users.filter(e => e.gender == gender);
    if(consideredUsers.length === 0) {
        return 0;
    }
    return consideredUsers.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / consideredUsers.length;
}