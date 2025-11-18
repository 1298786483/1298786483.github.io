var posts=["2025/11/18/hello-world/","2025/11/19/我的个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };