const users = require("../data/users.json") //users verisini ekleme

getAllUsers = () => {  //verileri getirecek fonksiyon
    return users
}

getByUserId = (userId) => {  //belirli bir id  getirecek fonksiyon
    return users.filter(user => user.id == userId )
}

module.exports = {getAllUsers, getByUserId} //dışarıdan çağırmak için