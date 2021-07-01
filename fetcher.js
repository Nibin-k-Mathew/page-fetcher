  const request = require('request');
  const fs = require('fs')
  const fetcher = process.argv.slice(2);
  const pageDownloader = request(fetcher[0], (error, response, body) => {
    fs.writeFile(fetcher[1], body,{ flag: 'a+' }, err => {
      if (err) {
        console.error(err)
        return
      }
    console.log("Downloaded and saved " + body.length + " bytes to ./index.html");
  });  
})
 

