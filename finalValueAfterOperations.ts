function finalValueAfterOperations(operations: string[]): number {
    let sum : number = 0;
    for(let i = 0; i < operations.length;i++)
        if(operations[i].includes('--'))
            sum--;
        else
            sum++;
    return sum;
};

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
};