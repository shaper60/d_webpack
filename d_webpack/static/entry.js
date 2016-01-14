// require("./build/sass/aiueo.scss");
// require("./build/sass/app.scss");

var req = require.context("./build/sass", true, /^(.*\.scss$)[^.]*$/);
req.keys().forEach(function(key){
    req(key);
});