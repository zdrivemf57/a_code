const user = {
    name: '山田太郎',
    age: 25
 };

function showUserInfo({name, age}) {
    console.log(`${name}, (${age}才)`);
}

showUserInfo(user);