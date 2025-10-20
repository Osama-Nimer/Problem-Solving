function finalValueAfterOperations(operations: string[]): number {
    let sum : number = 0;
    for(let i = 0; i < operations.length;i++)
        if(operations[i].includes('--'))
            sum--;
        else
            sum++;
    return sum;
};