var posts=["2024/11/23/hello-world/","2024/11/24/Post/","2024/11/24/这是一篇新的博文/","2024/11/24/My-New-Post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };