function isPalindrome(x: number): boolean {
    if(x < 0)
        return false;
    let or = x.toString();
    let str = "";
    for(let i = x.toString().length - 1; i >= 0; i--)
    {
        str += or[i];
    }
    if(str === or)
        return true;
    return false;
};