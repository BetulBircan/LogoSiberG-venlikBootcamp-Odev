//Restful Api Oluşturma:
//Restful yapısı bizim kendi serverımızı oluşturmak anlamına gelir.Restful yapısı bize gelen taleplere göre belirli bir uygulama geliştirip bu uygulamanın sonucunda da değer döndüren mekanizmadır.
//Bir HTTP protokolü üzerinde hazırlanmış olan bir servis mimarisidir.

/*Server Oluşturma yapısı
const { Console } = require("console")
const http = require("http") //kendi serverımızı oluşturmak için gerekli kütüphane

//server yaratma-request,response parametresi alır
const server = http.createServer((req,res) => {
    console.log(req.url)
})
//port numarasını belirle
const PORT = 6000
//server ı dinlemeye başla
server.listen(PORT,()=> console.log(`server ${PORT} üzerinden çalışmaya başladı`))
*/

//Gerekli kütüphaneyi çağır
const http = require("http") //kendi serverımızı oluşturmak için gerekli kütüphane
const friends = require("./data.json") //data.json daki verileri kütüphane şeklinde ekledik

//server oluştur
const server = http.createServer((req,res) => {
    console.log(req.url)
    res.statusCode = 200  //Başarılı Olduğunda demek
    res.setHeader("Content-Type","application/json") //server a talep gönderen clientların alacağı cevabın türü belirleniyor.biz json diyoruz.
    res.write(JSON.stringify(friends)) //onları jsona a çevirerek data.json içerisindek, verileri yolladık.
    res.end()
})

//port numarasını belirle
const PORT = 6000
//server ı dinlemeye başla
server.listen(PORT,()=> console.log(`server ${PORT} üzerinden çalışmaya başladı`))