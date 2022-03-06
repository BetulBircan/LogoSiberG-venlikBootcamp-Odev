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

//promise yaratma
const isItDoneYet = new Promise((resolve, reject) => { 
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

//bu fonksiyon ile promise le yapılan fonksiyonu yazdık
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
  
  //fonksiyon çağrılır
  checkIfItsDone()  



