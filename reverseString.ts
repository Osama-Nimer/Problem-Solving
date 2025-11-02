function reverseString(s: string[]): void {
    let last = s.length - 1;
    for(let i = 0; i < s.length / 2; i++)
    {
        let tmp = s[last];
        s[last] = s[i];
        s[i] = tmp;
        last --;
    }
};