var posts=["p/2022.html","p/4a17b156.html","p/a2c6a34f.html","p/e70bf4f.html","p/6709fc4a.html","p/586ff2f5.html","p/2022week48.html","p/2022week49.html","p/2022week50.html","p/42a88467.html","p/72351e9.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};