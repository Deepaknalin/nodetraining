var httpVariable = require('http')
var dl = require('./library/datelib')

var server = httpVariable.createServer(doItNow)

function doItNow(myrequest, myresponse){
    myresponse.writeHead(200,{'Content-Type':'text/html'})
    myresponse.write(dl.datelibrary())
    myresponse.write("<br></br>")
    myresponse.write(dl.stringlibrary())
    myresponse.end()

}

server.listen(8888)


