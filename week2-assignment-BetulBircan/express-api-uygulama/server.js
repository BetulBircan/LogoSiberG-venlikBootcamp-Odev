//Main yani ana dosyamız server.js
//Biz burada modüler bir yapı kurmayı amaçladık. Amaç ana dosuyada kodların az olması. Diğer örneklerde de oluğu gibi getirmek istediğimiz posts,users ve todos verilerini src kaynal klasöründen server.js e require ile ekleyeceğiz.

//express kütüphanesini sayfaya ekleme
const express = require("express")
//src/controller klasöründeki posts-controller dosyasını buraya ekledik
const postController = require("./src/controllers/posts-controller.js") 
//src/controller klasöründeki users-controller dosyasını buraya ekledik
const userController = require("./src/controllers/users-controller.js") 
//src/controller klasöründeki todos-controller dosyasını buraya ekledik
const todoController = require("./src/controllers/todos-controller.js")  

//uygulamayı oluşturma
const app = express()   

//get ile postları çağırma
app.get("/posts", (req, res ) => {
    //controller çağrılması
    var posts = postController.getAllPosts()
    //data return
    res.send(posts)
})

//post taki post/3 deki postu getirme
app.get("/posts/:postId", (req, res) => {
    var post = postController.getByPostId(req.params.postId)
    res.send(post)
})

//get ile user ları çağırma
app.get("/users", (req,res) => {
    //controller çağrılması
    var users = userController.getAllUsers()
    //veri döndürme
    res.send(users)
})

//user/6 dediğimizde id si 6 olan user ı getirme
app.get("/users/:userId", (req, res) => {
    var user = userController.getByUserId(req.params.userId)
    res.send(user)
})

//to dos verilerini get ile getirme
app.get("/todos", (req, res ) => {
    var todos
    if(req.query.userId) {
        todos = todoController.getTodosByUserId(req.query.userId)
    }
    else {
        todos = todoController.getAllTodos()
    }
    res.send(todos)
})

app.listen(6600)   //server ı dinleme