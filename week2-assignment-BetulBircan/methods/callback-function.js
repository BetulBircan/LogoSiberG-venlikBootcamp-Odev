//Bir callback fonksiyonu, başka bir fonksiyona geçirilen bir parametre şeklindeki fonksiyondur. Geri çağırma fonksiyonu, ikinci fonksiyonun içinde çağrılır ya da icra edilir.
//Node.js, asenkron bir platformda geri çağırmaları kullanır; veritabanı sorguları ya da büyük dosya okumaları gibi işlemlerin tamamlanması beklenmeden diğer işlemler araya girebilir. GCallback()fonksiyonu verilen bir iş tamamlanınca çağrılır; bu bloklamayı önler.

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