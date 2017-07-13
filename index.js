/**
 * Created by Timi on 7/12/2017.
 */
var request = require('request')

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('C:\\Users')
});

lineReader.on('line', function (line) {
    var newVar = {requestType: "deleteProduct",
        orgToken: "",
        productToken: line
    };
    request({
        method: "POST",
        url: 'http://blabla',
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(newVar)
    }, function (error, response, body) {
        if (error || response.statusCode != 200) {
            console.log("failed to delete " + line)
            process.exit(1)
        } else {
            console.log("deleted " + line)
        }
    })


});
