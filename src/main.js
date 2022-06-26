//1 У объектов сложная структура(array, object, function)
//2 Ссылочный тип данных

const user = {
    name: 'Alex',
    age: 23,
    isOnline: false

} // #123

const user2 = user //#123
// {}, new Object()

console.log(user2 === user) // true

user2.name = 'Bob'
console.log(user) // 'Bob'

console.log({} === {}) //false

const arr = []
const arr2 = arr


const copyUser = {}
copyUser.name = user.name
copyUser.age = user.age
copyUser.isOnline = user.isOnline

copyUser.isOnline = true
console.log(user) // nothing changed
// оригинал -> делаем копию -> вносим изменения в копию -> используем копию