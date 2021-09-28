
var longestCommonPrefix = function(strs:string[]) {
    let pattern = ''
    for (let i=0; i < strs[0].length; i++) {
        let common = strs[0][i];

        for (let j = 1; j < common.length; j++) {
            const element = strs[j];
            console.log(element);
            
        }
    }
};

console.log(longestCommonPrefix(["flo","flower","flowrd"]));


