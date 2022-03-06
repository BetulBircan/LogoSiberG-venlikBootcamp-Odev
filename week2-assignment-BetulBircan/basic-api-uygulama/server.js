//Bu örnekte kullanıcı 7000 portundaki  serverdan users ve post dosyasındaki verilere ulaşabilecek şekilde tasarlandı.

//http kütüphanesi eklendi
const http = require("http")

//data klasöründeki users.json ve post.json dosyaları kütüphane şeklinde eklendi.
const users = require("./data/users.json")
const posts = require("./data/posts.json")

//server oluşturma
const server = http.createServer((req,res)=>{
    console.log(`Talep Geldi: ${req.url}`)
    if(req.url==="/users") {
        //users geriye dönülecek
        res.setHeader("Content-Type","application/json")
        res.write(JSON.stringify(users))
        res.end()
    }
    else if(req.url === "/posts") {
        //post geriye dönülecek
        res.setHeader("Content-Type","application/json")
        res.write(JSON.stringify(posts))
        res.end()
    }
    else
    {
        //404 dönülecek
        res.writeHead(404,"Content-Type","application/json")
        res.end(JSON.stringify({message: "Yönlendirme Hatalı"}))
    }
})

//port oluşturma
const PORT = 7000

//server dinleme
server.listen(PORT,()=>console.log(`Server ${PORT} portu üzerinde çalışmaya başladı`))

