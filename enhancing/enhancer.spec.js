const {repair,succeed,fail,get} = require('./enhancer.js');
// test away!

describe("enhancer.js", function (){

    describe(".repair()", function(){
        it("should repair durability to 100", function(){
            const expected = { durability:23 ,enhancement:2 }
            const actual = { durability:100 ,enhancement:2}
            expect(repair(expected)).toMatchObject(actual);
        })
    });

    describe(".succeed()", function(){
        it("should increase enhancement by 1", function(){
            const expected = { durability:23 ,enhancement:2 }
            const actual = { durability:23 ,enhancement:3}
            expect(succeed(expected)).toMatchObject(actual);
        });
        it("should not increase if enhancement is already 20", function(){
            const expected = { durability:23 ,enhancement:20 }
            const actual = { durability:23 ,enhancement:20}
            expect(succeed(expected)).toMatchObject(actual);
        })
        it("should not change durability", function(){
            const expected = { durability:23 ,enhancement:2 }
            const actual = { durability:69 ,enhancement:3}
            expect(succeed(expected)).not.toMatchObject(actual);
        })
    });

    describe(".fail()", function(){
        it("if enhancement is over 15 it should reduce durability by 10 and enhancement by 1", function(){
            const expected = { durability:23 ,enhancement:20 }
            const actual = { durability:13 ,enhancement:19}
            expect(fail(expected)).toMatchObject(actual);
        })
        it("if enhancement 15 should reduce durability by 10 and enhancement should stay the same", function(){
            const expected = { durability:23 ,enhancement:15 }
            const actual = { durability:13 ,enhancement:15}
            expect(fail(expected)).toMatchObject(actual);
        })
        it("if enhancement less than 15 should reduce durability by 5 and enhancement should stay the same", function(){
            const expected = { durability:23 ,enhancement:12 }
            const actual = { durability:18 ,enhancement:12}
            expect(fail(expected)).toMatchObject(actual);
        })
        it("durability should not go below 0", function(){
            const expected = { durability:7 ,enhancement:17 }
            const actual = { durability:0 ,enhancement:16}
            expect(fail(expected)).toMatchObject(actual);
            expect(fail({ durability:3 ,enhancement:10 })).toMatchObject({ durability:0 ,enhancement:10});
            expect(fail({ durability:6 ,enhancement:15 })).toMatchObject({ durability:0 ,enhancement:15});
        })

    });

    describe(".get()", function(){
        it("should add a number before the name of the item if enhancement is above 0", function(){
            const expected = { durability:23 ,enhancement:7, name:"Iron Sword"}
            const actual = { durability:23 ,enhancement:7,name:"[+7] Iron Sword"}
            expect(get(expected)).toMatchObject(actual);
        })
        it("name should remain the same if enhancement level is 0", function(){
            const expected = { durability:23 ,enhancement:0, name:"Iron Sword"}
            const actual = { durability:23 ,enhancement:0,name:"Iron Sword"}
            expect(get(expected)).toMatchObject(actual);
        })
    });

});