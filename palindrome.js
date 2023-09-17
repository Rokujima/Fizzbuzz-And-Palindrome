class palindrome {

    lowRex(str){
        const reg = /[\W_]/g;
        return str.toLowerCase().replace(reg, '');
    }

    reverse(str){
        return str.split('').reverse().join('');
    }


    exc(str){
        str = this.lowRex(str);
        return str === this.reverse(str);
    }
}

const pal = new palindrome();

console.log(pal.exc('madam'));