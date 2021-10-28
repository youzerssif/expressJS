

const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('Voila la response du server nodemon')
})

server.listen(process.env.PORT || 3000)