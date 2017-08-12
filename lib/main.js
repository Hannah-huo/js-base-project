let result = '';
function main(num){
    for(let i = num; i > 0; i --){
        if(i === 2){
            result += i + ' bottles of beer on the wall,' + i + ' bottles of beer.\n' +
                'Take one down and pass it around, ' + (i - 1) + ' bottle of beer on the wall.\n'
        }
        else if(i === 1){
            result += i + ' bottle of beer on the wall,' + i + ' bottle of beer.\n' +
                'Take one down and pass it around, ' + 'no more bottles of beer on the wall.\n'
        }
        else if(i === 0){
            result += 'No more bottles of beer on the wall, no more bottles of beer.\n' +
                'Go to the store and buy some more, 99 bottles of beer on the wall.'
        }
        else{
            result += i + ' bottles of beer on the wall,' + i + ' bottles of beer.\n' +
                'Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.\n'
        }
    }

    return result;

}

module.exports = main;
//console.log(main(2));