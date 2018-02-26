var regexp = function(str, pattern){
    if(pattern.test(str)){
        if(str.match(pattern).length==1) return str.match(pattern).join("");
        else return str.match(pattern).join(",");
    } else return null;
};

var test_flag_y = function(str, pattern){
    if(pattern.test(str)){
		pattern.lastIndex=0;
        var match1 = pattern.exec(str);
        var match2 = pattern.exec(str);
        return `${match1[1]},${match2[1]}`;       
    } else return null;
};