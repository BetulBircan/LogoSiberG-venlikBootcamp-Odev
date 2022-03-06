## Node.js de Asenkron Yapılar için Callback() ve Promise Yapılarıyla Veri Çağırma ve HTTP İle Ve De Express ile Kendi Server ımızı ve Apimizi Oluşturma

Bu ödevimizde callback() function ve promise yapılarını kullandım. Daha sonra da HTTP ve Express ile Restful Api ve Server oluşturdum.

**NOT: Burada yazılan kodları çalıştırmak için bazı npm paketleri yüklenmesi gerekmektedir. Bunlar:
  -npm init -y ---> yeni bir package.json oluşturur ve çalışma ortamımızla ilgili bilgiler burada saklıdır. start ile hangi dosyayı çalıştıracağımızzı main ile ana klasörün    hangisi olduğunu belirleyebiliriz
  -npm i -D nodemon ---> server çalıştığı sürece restart etmemizi sağlayan modül.
  -npm i express --save ---->bir web framework u olan express ortamının kurulması için gerekli olan modül **
  
**NOT: Server oluşturma uygulamalrında çalışıp çalışıp çalışmadıpını test etmek için Postman adlı programı kullandım.

-Bunun için de ilk başta methods adlı bir klasör oluşturdum ve içerisine callback-function.js,promise.js ve promise2.js adlı dosyalarımı oluşturuldum.

**callback-function.js:
```
//Bir callback fonksiyonu, başka bir fonksiyona geçirilen bir parametre şeklindeki fonksiyondur. Geri çağırma fonksiyonu, ikinci fonksiyonun içinde çağrılır ya da icra edilir.
//Node.js, asenkron bir platformda geri çağırmaları kullanır; veritabanı sorguları ya da büyük dosya okumaları gibi işlemlerin tamamlanması beklenmeden diğer işlemler araya girebilir. Callback()fonksiyonu verilen bir iş tamamlanınca çağrılır; bu bloklamayı önler.

/*Kullanım şekli:
const getValues = (callback)=> {
    callback(error,success)
    Hatalı olması durumunda direk callback çağrılır. 
}
Bu fonksiyonu geri çağırırken de:
getValues((err,data) => {
    if(err) {
        //hata alması durumunda çalışacak kodlar
    }
    else {
        console.log(data) Veriyi getir
    }
})
*/
const getValues = (callback) => { //callback parametresi alır
    var state = true   //state adında bir değişken atanır.true ise başarılı,false ise error çaışacaktır.
    if(state)
        callback(undefined, "Method Başarılı") //callback in ilk parametresi hata,2.parametresi success dir.
    else
        callback("Veri Getirilemedi",undefined)
}
getValues((err,data) => {  //fonksiyon burada çağrılır.
    if(err)
        console.log(err) //hata alınması durumunda çalışacak kod
    else
        console.log(data) //hata alınmaması durumunda çalışcak kod.
})
```
**Sonucu**

![nodejscallback](https://user-images.githubusercontent.com/86554799/153745741-adb28d5a-f82a-4c3a-adfb-3a34ca5fc7bf.jpg)

**promise.js:**
```
//Promises, Node.js gibi asenkron çalışma mantığını kullanan programlamalar için önemli bir yöntemdir.   Pyramid of Doom  olarak nitelendirilen iç içe geçmiş karmaşık ve uzun kodların daha düzenli ve daha sade hale gelmesini sağlar. Bu yöntem belki tek başına kullanılan asenkron bir fonksiyon için çok etkili değil ama birden fazla fonksiyon olma durumunda kullanılması gereken bir yöntemdir.

/*Promise tanımı

let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})
*/
let done = false

const isItDoneYet = new Promise((resolve, reject) => { //promise yaratma
  if (done) { 
    //let done = true ise çalışacak kod
    const workDone = 'Here is the thing I built'
    resolve(workDone) //true ise demek
  } else {
    //let done = false ise çalışacak kod
    const why = 'Still working on something else'
    reject(why) //false ise demek
  }
})

const checkIfItsDone = () => {
  isItDoneYet
  //resolve tetikler
    .then(ok => {
      console.log(ok)
    })

    //reject tetikler
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDone()  //fonksiyon çağrılır

```
**Sonuc**

![nodepromise](https://user-images.githubusercontent.com/86554799/153746050-41aa9632-ced3-4164-84a4-0b1384543cf6.jpg)

**promise2.js**
```
const getValue = () => {
    return new Promise((resolve,reject) => {
        try {
            const xhr = new XMLHttpRequest()
            
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState == 4)
                    resolve(xhr.responseText)
                else
                    reject("Bağlantı Sağlanamadı")
            })

            xhr.open("GET","https://jsonplaceholder.typicode.com/users")
            xhr.send()
        }
        catch(error) {
            reject(error) }
    })
}
getValue()
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})
.finally(fin => {
    console.log("Her Yerde Çalışırım")
})
```
-Daha sonra da basic-api adında bir klasör oluşturdum ve içerisine server.js dosyasını ve de data.json oluşturdum. Burada da data.json bilgilerini server oluşturarak get metoduyla çağırdık.

**server.js klasörü
```
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
```
**Sonucu**

![nodemon](https://user-images.githubusercontent.com/86554799/153746274-4159664e-563c-40aa-8e5a-e4eec9f9ee5d.jpg)

-Daha sonra da  basic-api-uygulama adlı bir klasör oluşturdum ve içerisine data klasörü oluşturarak users.json ve posts.json dosyasını oluşturdum ve bu dosyalara "https://jsonplaceholder.typicode.com/" adresinden aldığım users ve post bilgilerini ekledim. Main dosya olarak da server.js dosyasını oluşturdum.
 
**server.js**
```
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

```
**Sonucu**

![7000users](https://user-images.githubusercontent.com/86554799/153746493-908e170c-c54f-4196-a660-9c0084092108.jpg)

![7000posts](https://user-images.githubusercontent.com/86554799/153746499-3fb5cd17-f9e1-4232-94fc-af3f21629dfc.jpg)

-Daha sonra da express web frameworkünden yararlanarak daha düzenli daha az kodla restfulapi oluşturmak için express-api adlı klasör oluşturdum. İçerisine data klasöründe users.json ve posts.json dosyalarını oluşturdum. Yine aynı şekilde "https://jsonplaceholder.typicode.com/" adresinden aldığım users ve post bilgilerini ekledim. Aynı şekilde main dosyası için de server.js dosyasını olulturdum.

**server.js**
```
//Express bir web frameworkudur.Bir restfulapi ya da web sayfası geliştirme altyapısıdır.

/*express ile server oluşturma:

//express paketi çağırma
const express = require("express")
//expressle uygulama oluştu
const app = express()
//get çağrıları için yazılan kodlar
app.get("/",(req,res) => {    "/" kök dizin
    res.send("Server Çalıştı")
})

//Port Oluşturma
const PORT = 5000
//App i dinleme(server ı )
app.listen(PORT)
*/

//express kütüphanesi çağırıldı.
const express = require("express")
//posts ve users verileri ssyfaya eklendi.
const posts = require("./data/posts.json")
const users = require("./data/users.json")

//uygulama oluşturuldu.
const app = express();

//app.get ile users bilgileri çağırıldı ve response edildi
app.get("/users", (req,res) => {
    console.log(req.query)   
    //querystring ile id si 5 olan user ı getirme
    if(req.query.id) {
        var item = users.filter(a => a.id == req.query.id)
        res.send(item)
    }
    else
        res.send(users)
})

//route parameresi ile 3 numaralı postu bulma
app.get("/posts/:postId",(req,res) => {
    console.log(req.params.postId)
    var result

    result = posts.filter(b => b.id == req.params.postId)
    res.send(result)
})

//post bilgileri getirildi
app.get("/posts",(req,res)=> {
    res.send(posts)
})
const PORT = 5500
app.listen(PORT)
```
**Sonucu**

![5500users](https://user-images.githubusercontent.com/86554799/153746724-131bfaa2-7d55-40ab-9beb-0c265366dc73.jpg)

![5500userid5](https://user-images.githubusercontent.com/86554799/153746738-b99c2377-4c36-4f66-8c46-0dd356072d2e.jpg)

![5500posts](https://user-images.githubusercontent.com/86554799/153746744-b4dc386f-4d3a-42d1-9b0a-6e7700062801.jpg)

-Son olarak da express-api-uygulama adlı klasör oluşturdum ve içerisini kaynak dosyası olması adına src klasörü oluşturdum.src klasörü içerisine data/users.json, posts.json ve todos.json dosyaları oluiturdum. Ayrıyetten controllers adlı bir klasör daha oluşturup içerisine posts-controller.js, users-controller.js ve todos-controller.js adında dosyalar oluşturdum. Amacım main dosya olarak oluşturduğum server.js dosyasında daha az klasör barındırmak ve src/controllers klasörü içerisindeki dosyaları server.js e require etmek yani eklemek.

![expressPİUYGULAMA](https://user-images.githubusercontent.com/86554799/153746994-d442f3ae-a060-47d7-ac4a-f2066839a057.jpg)

-Kod fazla olduğu için burada paylaşamıyorum sadece sonuç kısmını eklicem. Kodu incelemek isterseniz express-api-uygulama klasöründeki dosyaları ve kodları detaylıca inceleyebilirsiniz.

**Sonuc**

![6600post](https://user-images.githubusercontent.com/86554799/153747031-6d756903-d106-4f21-be1d-8211b8f37db2.jpg)

![6600post3](https://user-images.githubusercontent.com/86554799/153747036-82add6c9-889b-4bdb-b74d-593b369e5410.jpg)

![6600users](https://user-images.githubusercontent.com/86554799/153747041-654eea62-262b-4830-a225-d1781b6bd9d8.jpg)

![6600todos](https://user-images.githubusercontent.com/86554799/153747049-faac98be-4e47-469b-971a-073bfe019524.jpg)

![6600todosuserid3](https://user-images.githubusercontent.com/86554799/153747058-e87a41a8-54f4-4612-9015-a56542342575.jpg)
