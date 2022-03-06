//promise ile xmlhttprequest ile gelen veriyi asenkron yapıda getirme
const getValue = () => {
    //promise dönüceğini söyler
    return new Promise((resolve,reject) => {

        //try catch ile hata var mı yok mu kontrol eder.
        try {
            //xmlhttprequest ile veri alması için nesne oluşturulur
            const xhr = new XMLHttpRequest()
            //hazır olma durumu tetiklendiğinde çalışacak kod
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState == 4)
                    resolve(xhr.responseText)
                else
                    reject("Bağlantı Sağlanamadı")
            })
            //get ile veriyi alma
            xhr.open("GET","https://jsonplaceholder.typicode.com/users")
            xhr.send()
        }
        catch(error) {
            reject(error) }
    })
}
getValue()
//resolve durumunda çalışacak kod
.then(result => {
    console.log(result)
})
//reject durumunda 
.catch(err => {
    console.log(err)
})
//her türlü çalışcak kod
.finally(fin => {
    console.log("Her Yerde Çalışırım")
})