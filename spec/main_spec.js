"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("两行一组输出", function(){

        var result = main();
        var expect_string =
            '3 bottles of beer on the wall, 3 bottles of beer.\n' +
            'Take one down and pass it around, 2 bottles of beer on the wall.\n';
        
        expect(expect_string).to.equal(result);
    });

    it("两瓶输出", function(){

        var result = main();
        var expect_string =
            '2 bottles of beer on the wall, 2 bottles of beer.\n' +
            'Take one down and pass it around, 1 bottle of beer on the wall.\n';

        expect(expect_string).to.equal(result);
    });

    it("最后一瓶输出", function(){

        var result = main();
        var expect_string =
            '1 bottle of beer on the wall, 1 bottle of beer.\n' +
            'Take one down and pass it around, no more bottles of beer on the wall.';

        expect(expect_string).to.equal(result);
    });

    it("结束段落输出", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.';

        expect(expect_string).to.equal(result);
    });
});