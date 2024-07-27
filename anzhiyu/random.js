var posts=["2024/07/19/Case/","2024/07/27/GitLab/","2024/06/15/Git/","2024/06/25/Mysql—救急！/","2024/07/14/odoo完成开发练习/","2024/07/11/JavaScript/","2024/07/15/odoo继承/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };