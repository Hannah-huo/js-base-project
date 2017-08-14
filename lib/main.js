function main(num){
    let result = '';
    for(let i = num; i >= 0; i --){
        if(i > 2){
            result += i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\n' +
                'Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.\n';
        } else if(i === 2){
            result += i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\n' +
                'Take one down and pass it around, 1 bottle of beer on the wall.\n'
        } else if(i === 1){
            result += '1 bottle of beer on the wall, 1 bottle of beer.\n' +
                'Take one down and pass it around, ' + 'no more bottles of beer on the wall.\n'
        } else if(i === 0){
            result += 'No more bottles of beer on the wall, no more bottles of beer.\n' +
                'Go to the store and buy some more, 99 bottles of beer on the wall.'
        }
    }

    return result;

}

module.exports = main;
//console.log(main(2));