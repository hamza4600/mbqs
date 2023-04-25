// for Dom Node 
const uUId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // let str = "";
    // for (let i = 0; i < 10; i++) {
    //     str += Math.floor(Math.random() * 10);
    // }
    // let sum = 0;
    // for (let i = 0; i < str.length; i++) {
    //     sum += parseInt(str[i]);
    // }
    // if (sum % 3 === 0) {
    //     return str;
    // }

    // // return uuId();
    // // also add some random alphabets in the string
    // let alphabets = "abcdefghijklmnopqrstuvwxyz";
    // let randomAlphabets = "";
    // for (let i = 0; i < 3; i++) {
    //     randomAlphabets += alphabets[Math.floor(Math.random() * alphabets.length)];
    // }
    // return str + randomAlphabets;

    
}

export default uUId;