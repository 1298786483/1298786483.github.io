var posts=["2025/11/19/2025-11-19-hexo-anzhiyu-setup-detailed/","2025/11/21/2025-11-21-neu-booking-bot/","2025/11/21/2025-11-21-neu-booking-bot - 副本/","2025/11/19/我的个人博客/","2025/11/18/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };