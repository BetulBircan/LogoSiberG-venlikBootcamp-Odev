const posts = require("../data/posts.json") //posts verisini ekleme

getAllPosts = () => {   //verileri getirecek fonksiyon
    return posts
} 

getByPostId = (postId) => { //belirli bir id  getirecek fonksiyon
    return posts.filter(c => c.id ==postId)
}

module.exports = {getAllPosts, getByPostId}  //dışarıdan çağırmak için