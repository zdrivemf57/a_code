const user = {
    name: '山田太郎',
    age: 25
 };

 // 分割代入
 const {name, age} = user;

 console.log(name, age);

function showUserInfo(user) {
    console.log(`${user.name} (${user.age}才)`);
}

function showUserInfo2({name, age}) {
    console.log(`${name}, (${age}才)`);
}

showUserInfo(user);
showUserInfo2(user);
