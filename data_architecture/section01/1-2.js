/**
 * javascript 1-2 practice
 */

class sec1_2 {
    reverseStr(str) {
        let resultStr = '';

        for (let i = str.length-1; i >= 0; i--) {
            resultStr += str.charAt(i);
        }
        return resultStr;
    }
}

let kim = new sec1_2();
let str = process.argv.slice(2).toString();
console.log(kim.reverseStr(str));