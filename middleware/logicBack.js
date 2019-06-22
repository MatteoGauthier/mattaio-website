const fetch = require('node-fetch');
var articles;

fetch('https://cdn.jsdelivr.net/gh/MattixNow/writings/posts/Review%20ScreenToGif.md', {
    headers: {
        "Accept-Charset": "utf-8"
      },
}).then(res => res.text())
.then(res => {
    console.log(res)
    articles['Review ScreenToGif'] = res
}).catch((err) => {
    
});