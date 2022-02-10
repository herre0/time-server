var http = require('http')

var server = http.createServer(function (req, res) {
    let myJson = {}
    const d = new Date();

    myJson["year"] = d.getFullYear()
    myJson["month"] = d.getMonth()
    myJson["day"] = d.getDay()
    myJson["hour"] = d.getHours()
    myJson["minute"] = d.getMinutes()

    if(req.url.includes('api/currenttime'))
        res.write(JSON.stringify(myJson))

    res.end()
}).listen(8000);