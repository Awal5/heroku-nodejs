const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/', function(req, res) {
    res.json({
        type: 'get',
        number: 1,
        nama: 'Rizki Awal Ramadhani',
        npm: '2042019'
    });
})

app.post('/cr', function(req, res) {
    res.json({
        type: 'post',
        number: 2,
        nama: 'RUcup',
        npm: '2042000'
    });
})


app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});