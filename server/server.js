// server.js (Express 4.0)
var express        = require('express'),
   morgan          = require('morgan'),
   bodyParser      = require('body-parser'),
   methodOverride  = require('method-override'),
   cors            = require('cors'),
   app             = express();

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					         // log every request to the console
//app.use(bodyParser());
app.use(bodyParser.urlencoded({                 // pull information from html in POST
   extended: true
}));
app.use(methodOverride()); 					      // simulate DELETE and PUT
app.use(cors());                                // enable CORS

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

var frameworks = [
      {id: 1, name: 'Angular', company: 'Google'},
      {id: 2, name: 'Falcor',  company: 'Netflix'},
      {id: 3, name: 'React',   company: 'Facebook'},
      {id: 4, name: 'RxJs',    company: 'Microsoft'}
   ],
   lastId = frameworks.length + 1;

var symbols = [
   { symbol: "XFX", price: 240.22, volume: 23432 },
   { symbol: "TNZ", price: 332.19, volume: 234 },
   { symbol: "KUY", price: 300.14, volume: 234 },
   { symbol: "QWE", price: 100.79, volume: 234 },
   { symbol: "JXJ", price: 120.22, volume: 5323 }
];

app.get('/frameworks', function (req, res) {
   res.send(frameworks);
});

app.get('/symbols', function (req, res) {
   res.send(symbols);
});

app.post('/framework', function (req, res) {

   var framework = req.body;
   console.log('--- req.body--- ');
   console.log(req.body);

   framework.id = lastId;
   lastId++;
   frameworks.push(framework);
   res.send(framework);

   console.log('--- framework--- ');
   console.log(framework);
});

app.post('/framework/:id/done', function (req, res) {
   var frameworkId = req.params.id,
      framework = null;
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         framework = frameworks[i];
         break;
      }
   }
   framework.name = 'Done - ' + framework.name;
   res.send(frameworks);
});

app.get('/framework/:id', function (req, res) {
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         res.send(frameworks[i]);
         break;
      }
   }
   res.send({msg: 'Note not found'}, 404);
});

app.post('/framework/:id', function (req, res) {
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         frameworks[i] = req.body;
         frameworks[i].id = req.params.id;
         res.send(frameworks[i]);
         break;
      }
   }
   res.send({msg: 'Note not found'}, 404);
});

app.get('/jero', function (req, res) {
   console.log('--- /jero ---');
   var jero = {"name": "jero"};
   res.json(jero);
   //res.send('sisa');
});

app.get('/', function (req, res) {
   res.render('index', {});
});

app.post('/upload', function (req, res) {
   console.log('/upload');
   //console.log(req);
   console.log(res);
});

var PORT = 2409;
app.listen(PORT);

console.log('Open http://localhost:' + PORT + ' to access the files right now');