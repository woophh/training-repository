const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["Ann", 42, true],
    ["David", 27, true],
    ["Eve", 20, false],
    ["Max", 26, true],
]

function filterAndSortUsers (users) {
    let UsersOver25 = users.filter(item => item[1] > 25 && item[2])
    let sortUsersOver25 = UsersOver25.sort((a, b) => a[1] - b[1])
    return sortUsersOver25.map(el => el[0])
}

const sportUsersOver25 = filterAndSortUsers(users);
console.log(sportUsersOver25);