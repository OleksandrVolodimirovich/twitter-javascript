class Twitter{
    constructor({listElem}){
      this.tweets = new Posts();
      this.elements = {
        listElems: document.querySelector(listElem)
      };
    }

    renderPosts(){

    }

    showUserPost(){
      
    }

    showLikePost(){

    }

    showAllPost(){

    }

    openModal(){

    }
}

class Posts{
  constructor({posts = []} = {}){  //* деструктиризація
    this.posts = posts;
  }
  addPost(tweet){
    const post = new Post(tweet);
    this.posts.push(post);
  }
  deletePost(id){

  }

  likePost(id){

  }
}

class Post{
  constructor(param){
    this.id = param.id;
    this.userName = param.userName; 
    this.nickName = param.nickName;
    this.postData = param.postData;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = param.liked;
  }

  changeLike(){
    this.liked = !this.liked;
    if(this.liked){
      this.likes++;
    } else {
      this.likes--;
    }
  }
}

const twitter = new Twitter({
  listElem: '.tweet-list',
});

twitter.tweets.addPost({
  id: '23',
  userName: 'Nataly', 
  nickName: 'Nat',
  postData: '01.12.2020',
  text: 'Good idea',
  img: '',
  likes: '50',
  liked: true,
});

console.log('twitter: ', twitter);
































