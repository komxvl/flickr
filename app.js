var express = require("express");
var parse = require('url').parse;
const url = require('url');
const path = require('path');
var fs = require("fs");
var Flickr = require('flickr-sdk');
var app = express();
var http = require('http');
CONSUMER_KEY = "255133fe0b2787dba24b3e287d689b77";
CONSUMER_SECRET = "5793bacd0b4bfbdb";

var oauth = new Flickr.OAuth(
	CONSUMER_KEY,
	CONSUMER_SECRET
);

console.log("OAUTHHH",oauth);

app.use(express.static(path.join(__dirname, 'dist')));

/*var requestTokenSecret;
var requestToken;*/
function getRequestToken(req, res) {
	oauth.request('http://localhost:3000/oauth/callback').then(function (_res) {
		console.log("_res.body");
		console.log("RESPONSE:,",_res.body);
		console.log("_res.body end");
		var requestToken = _res.body.oauth_token;
		var requestTokenSecret = _res.body.oauth_token_secret;

		res.statusCode = 302;
		res.setHeader('location', oauth.authorizeUrl(requestToken, 'write'));
		res.send(_res.body);
		res.end();

	}).catch(function (err) {
		res.statusCode = 400;
		res.end(err.message);
	});
}
var oauthVerifier;

	var url = parse(req.url, true);
	console.log( "url.query");
	console.log( url.query);
	switch (url.pathname) {
    case '/':
            fs.readFile('dist/index.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
	case '/send':
		return getRequestToken(req, res);
	case '/oauth/callback':
		return verifyRequestToken(req, res, url.query);
	default:
		res.statusCode = 404;
		res.end();
	}
}).listen(3000, function () {
	console.log('Open your browser to http://localhost:3000');
});*/
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/send' , function(req, res){
	return getRequestToken(req, res);
});

var requestToken;
var requestTokenSecret;
var flickr = new Flickr(CONSUMER_KEY);

app.get("/getKey",function(req, res){
	console.log("requestToken");
	console.log(requestToken);
	oauth.request('http://localhost:3000/oauth/callback').then(function (_res) {
		requestToken = _res.body.oauth_token;
		requestTokenSecret = _res.body.oauth_token_secret;
		console.log("requestToken");
		console.log(requestToken);
		console.log(_res.body);
		res.send(_res.body);

		res.statusCode = 302;
		res.setHeader('location', oauth.authorizeUrl(requestToken, 'write'));
		res.send(_res.body);
		res.end();
	}).catch(function (err) {
		res.statusCode = 400;
		res.end(err.message);
	});
});
var userNsid;
app.get('/oauth/callback' , function(req, res){
	var url = parse(req.url, true);
	console.log(url.query.oauth_token);
	var requestToken = url.query.oauth_token;
	oauthVerifier = url.query.oauth_verifier;
	oauth.verify(requestToken, oauthVerifier, requestTokenSecret).then(function (_res) {
		console.log("START");
		console.log(_res.body);
		console.log("##########");
		userNsid = _res.body.user_nsid;
		var oauthToken = _res.body.oauth_token;
		var oauthTokenSecret = _res.body.oauth_token_secret;
		var flickr;

	

		console.log('oauth token:', oauthToken);
		console.log('oauth token secret:', oauthTokenSecret);

		console.log("RESPONS");
		res.send(_res.body);
	
		//flickr.test.login().pipe(res);
	}).catch(function (err) {
		res.statusCode = 400;
		res.end(err.message);
	});
	res.redirect('/');

});

app.get('/userGetInfo',function(req,res){
		flickr.people.getInfo({
			user_id:userNsid
		}).then(function (_res ,_req) {
			console.log("_RESR");
			console.log(_res.body);
			res.send(_res.body);
		
		});
});
var photoset_id;
app.get('/photosets/getList' , function (req,res) {

	flickr.photosets.getList({
		user_id:userNsid
	}).then(function (_res ,_req) {
		console.log("_RESR");
		console.log(_res.body);
		console.log("photoset_id",photoset_id);
		res.send(_res.body);
	
	});
});

app.listen(3000);
