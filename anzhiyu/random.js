var posts=["2024/07/14/hello-world/","2024/07/14/odoo完成开发练习/","2024/07/14/我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };