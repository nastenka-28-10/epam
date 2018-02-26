describe ("Result without flags", function(){
    it ('"testtesttest".match(/test/) returns "test"',function(){
        expect(regexp("testtesttest", /test/)).toEqual("test");
        
    });   
});

describe ("Result with flag 'g'", function(){
    it ('"testtesttest".match(/test/g) returns "test,test,test"',function(){
        expect(regexp("testtesttest", /test/g)).toEqual("test,test,test");
        
    });   
});

describe ("Uppercase-words search without i ", function(){
    it ('"TESTqwerty".match(/test/) returns null',function(){
        expect(regexp("TESTqwerty", /test/)).toEqual(null);   
    });   
});

describe ("Uppercase-words search with i ", function(){
    it ('"TESTqwerty".match(/test/i) returns "TEST"',function(){
        expect(regexp("TESTqwerty", /test/i)).toEqual("TEST");   
    });   
});

let str_for_m = "1 test string\n2 test string\n3 test string";

describe ("Multi-line search without m", function(){
    it (`"1 test string\\n2 test string\\n3 test string".match(/^\d/g) returns "1"`,function(){
        expect(regexp(str_for_m, /^\d/g)).toEqual("1");   
    });   
});

describe ("Multi-line search with m", function(){
    it (`"1 test string\\n2 test string\\n3 test string".match(/^\d/g) returns "1,2,3"`,function(){
        expect(regexp(str_for_m, /^\d/mg)).toEqual("1,2,3");   
    });   
});
//----------------------------------------------------------------------------------------------------
describe ("Test flag y", function(){
    it (`The first command /(\S+) строка\n?/y.exec('Первая строка\\nВторая строка')[1] returns "Первая" and  the second one returns "Вторая"`,function(){
        expect(test_flag_y('Первая строка\nВторая строка', /(\S+) строка\n?/y)).toEqual("Первая,Вторая");   
    });   
});

describe ("Test the same one without y", function(){
    it (`The first command /(\S+) строка\n?/.exec('Первая строка\\nВторая строка')[1] returns "Первая" and  the second one returns "Первая"`,function(){
        expect(test_flag_y('Первая строка\nВторая строка', /(\S+) строка\n?/)).toEqual("Первая,Первая");   
    });   
});
