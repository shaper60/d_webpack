var req = require.context("./build/sass", true, /^(.*\.scss$)[^.]*$/);
req.keys().forEach(function(key){
    req(key);
});

var req = require.context("./build/js", true, /^(.*\.js$)[^.]*$/);
req.keys().forEach(function(key){
    req(key);
});