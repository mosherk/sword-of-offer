//解法一：超出时间，规定1秒，用时2秒；
//比如数组[1,2,3,4,5,6,7]、或[1,3,4,6,7]。整体思想是遍历数组，偶数则取出放在数组末尾。
//有两个指针i和j，i用于遍历数组，j初始为最后一个元素的下标，指向第一个往后移的偶数的前一个元素下标。
//判断如果是偶数，取出放到末尾，然后--j，这时i不变，因为这个偶数取出后，i就指向这个偶数的后一个元素，这样就能保证每个元素都不会漏了。
//如果是奇数，才++i，让指针向后移一位。

function reOrderArray( array ) {
    let j=array.length;
    for(let i=0; i<array.length&&i<j;){
        if(array[i] % 2 == 0){
            array.push(array.splice(i,1))
            --j;
        }
        if(array[i] % 2 == 1){
            ++i;
        }
    }
    return array
}
