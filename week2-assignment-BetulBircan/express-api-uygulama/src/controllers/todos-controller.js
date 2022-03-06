const todos = require("../data/todos.json") //to dos verisini ekleme

getAllTodos = () => { //verileri getirecek fonksiyon
    return todos
}

getTodosByUserId = (userId) => {   //127.0.0.1:6600/todos/?userId=3 verisini getirmek için
    return todos.filter(todo => todo.userId == userId)
}

module.exports = {getAllTodos, getTodosByUserId}  // dışarıya çıkartmak için