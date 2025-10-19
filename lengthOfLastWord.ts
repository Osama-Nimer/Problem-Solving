function lengthOfLastWord(s: string): number {
    let i = s.length - 1; 
    let str = ""; 
    while(s[i] === " " && str.length === 0) {
        i--;
    }
    while(s[i] !== " " && i >= 0 ) {
        str += s[i];
        i--;
    }
    while( i >= 0 && s[i] === " ") {
        i--;
    }
    return str.length;
};