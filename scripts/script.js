class FetchData {
  getResourse = async url => {
    const res = await fetch(url);

    if(!res.ok){
      throw new Error('Error' + res.status);
    }
    return res.json();
  }

  getPost = () => this.getResourse('db/dataBase.json');
}

const obj = new FetchData()

obj.getPost().then((data) => {
  console.log(data);
})

class Twitter{
    constructor({listElem}){
      const fetchData = new FetchData()
      this.tweets = new Posts();
      this.elements = {
        listElems: document.querySelector(listElem)
      }

      fetchData.getPost().then(data => {
        data.forEach(this.tweets.addPost)
        this.showAllPost()
      })
    }

    renderPosts(tweets){ 
      this.elements.listElems.textCotent = '';

      tweets.forEach(tweet => {
        console.log(tweet);
      })
    }

    showUserPost(){
      
    }

    showLikePost(){

    }

    showAllPost(){
      this.renderPosts(this.tweets.posts)
    }

    openModal(){

    }
}

class Posts{
  constructor({posts = []} = {}){  //* деструктиризація
    this.posts = posts;
  }
  addPost = (tweets) => {
    this.posts.push(tweets);
  }
  deletePost(id){

  } 

  likePost(id){

  }
}

class Post{
  constructor({ id, userName, nickname, postData, text, img, likes = 0 }){
    this.id = id || this.generateID();
    this.userName = userName; 
    this.nickname = nickname;
    this.postData = postData ? new Date(postData) : new Date();
    this.text = text;
    this.img = img;
    this.likes = likes;
    this.liked = false;
  }

  changeLike(){
    this.liked = !this.liked;
    if(this.liked){
      this.likes++;
    } else {
      this.likes--;
    }
  }
  generateID(){
    return `${Math.random().toString(32).slice(2, 11)}${(+new Date()).toString(32)}`;
  }
  getDate(){
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute:'2-digit',
    };
    return this.postData.toLocaleString('ua-UA', options);
  }
}

const twitter = new Twitter({
  listElem: '.tweet-list',
});




































