var express = require('express');
;//.createServer();
var app = express();
var fs = require("fs");
var mysql = require('mysql');

var days = [
    {id: '1', name: 'Понедельник'},
    {id: '2', name: 'Вторник'},
    {id: '3', name: 'Среда'},
    {id: '4', name: 'Четверг'},
    {id: '5', name: 'Пятница'},
    {id: '6', name: 'Суббота'},
    {id: '7', name: 'Воскресенье'}
];

var users = [
    {name: 'tj'}
    , {name: 'tobi'}
    , {name: 'loki'}
    , {name: 'jane'}
    , {name: 'bandit'}
];

var schedule = '{  \
     "events": [   \
        "test785",\
        {"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}, \
        {"title":"День рождения","date":"2015-04-18T12:00:00.000Z"}, \
        {"roles": {  \
            "isAdmin": "false",\
            "isEditor": "true"  },\
            "test222":"45"\
        }   \
     ]}';


function createError(status, message) {
    var err = new Error(message);
    err.status = status;
    return err;
}

app.get('/', function (req, res) {
//    res.send('Привет мир!!!!<br/>' +        '<a href="http://localhost:3000" class="btn btn-default btn-xs active" role="button">Ссылка на сервак</a>');
    res.sendFile(__dirname + '/indexDB.html', 'index.html');
});

app.get('/privet', function (req, res) {
    res.send('Привет privet!');
});

app.get('/user/:id?', function (req, res) {
    res.send('user ' + req.params.id);
});

app.get('/user/:id/:operation?', function (req, res) {
    res.send('user ' + req.params.id + ' op-' + req.params.operation);
});

app.post('/bumerang', function (req, res) {
    res.send('' + req.body);
});

app.get('/week/:id?', function (req, res) {
    req.day = days[req.params.id];
    if (req.day.id == 3) {
        res.send(req.day.name + ' а вот и экватор!');
    }
    else if (req.day) {
        res.send(req.day.name);
//        next();
    } else {
        next(new Error('cannot find days ' + req.params.id));
    }
});

app.get('/err', function (req, res) {
    //res.send('what???');
    //res.sendStatus(404);
    res.send('what???', 404);
});

app.use(express.static(__dirname + 'public'));


app.get('/getJson', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.send(JSON.stringify({ a: 1 }, null, 3));
    res.send(JSON.stringify(days, null, 3));
});

app.get('/getJson2', function (req, res) {
    var x = {
        test: 1,
        embedded: {
            attr1: 'attr',
            attr2: false
        }
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(x), null, 3);
});

app.get('/getJson3', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    //res.writeHead(200, {'Content-Type': 'application/json'});
    var t = JSON.parse(schedule);
    res.send(JSON.stringify(t, null, 3));
});

app.get('/getJson4', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var obj = {
        foo: 'foo',
        foo1: 'foo1',
        foo2: 'foo2',
        toQ1: function () {
            return 'bar';
        }
    };
    res.send(JSON.stringify(obj, null, 3));
});

app.get('/jsonFiles/:fileid?', function (req, res) {
    //var usersFilePath = path.join(__dirname, 'users.min.json');
    fs.readFile(__dirname + "/TestFiles/json/" + req.params.fileid, 'utf8', function (err, data) {
        //console.log( data );
        res.end(data);
    });
})

app.get('/site/:page?', function (req, res) {
    res.sendFile(__dirname + '/TestFiles/template/' + req.params.page + '.html');
});

///Возврат файла
app.get('/zip', function (req, res) {
    res.download(__dirname + '/TestFiles/json/gulp-project-master.zip', 'report.zip');
});

// /files/* is accessed via req.params[0]
// but here we name it :file
app.get('/files/:file(*)', function (req, res, next) {
    var file = req.params.file;
    var path = __dirname + '/TestFiles/' + file;
    console.log(path);
    res.download(path, function (err) {
        if (!err) return; // file sent
        if (err && err.status !== 404) return next(err); // non-404 error
        // file for download not found
        res.statusCode = 404;
        res.send('Извените, но файл с таким именем - не найден!');
    });
});

app.listen(3005, function () {
    console.log('Example app listening on port 3005!');
});

app.get('/geo/:operation?', function (req, res) {
    var qqq = '111';

    //debugger;
    var squery = 'SELECT * FROM world.city';

    if (req.params.operation=='country'){
        squery = 'SELECT * FROM world.country'
    }


    /*
     var connection = mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : 'admin',
     database : 'world'
     });

     //connection.connect();


     connection.query(squery, function(err, rows, fields) {
     //if (err) throw err;

     if (err) {
     console.log(err);
     throw err;
     // Иногда возвращается ошибка Error:connection ETIMEDOUT
     }

     //console.log('The solution is: ', rows[0].solution);
     qqq = JSON.stringify(rows)
     //console.log(qqq);

     res.setHeader('Content-Type', 'application/json');
     res.send(qqq);
     });


     //connection.end();
     */

    cMysql = mysql.createPool({
        host: 'localhost',
        database: 'world',
        user: 'root',
        password: 'admin',
        connectionLimit: 100
    });


    cMysql.getConnection(function (err, conn) {
        if (err) {
            console.log("MYSQL: can't get connection from pool:", err)
        } else {
            conn.query(squery,
                function (er, rows) {
                    if (er) {
                        conn.release();
                        console.log("MYSQL: ERROR: ", err);
                    } else {
                        conn.release();
                        qqq = JSON.stringify(rows)
                        //console.log(qqq);

                        res.setHeader('Content-Type', 'application/json');
                        res.send(qqq);

                    }
                });
        }
    });


});
