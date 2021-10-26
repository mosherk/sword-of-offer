//解法一：暴力算法，两层循环即可，没啥好说的了
//解法二：二分法。   60ms 9612kb
//取中间值比较，和右端点target
//1、如果45613，arr[mid]为6，大于target，所以[first … mid]都 >= target(非递减数组的原因)，这样答案区间就在[mid+1…last], 所以first = mid +1
//2、如果5 6 1 2 3 4 ，arr[mid] 为1，小于target，说明[mid+1…last]没有答案，但arr[mid]可能是答案，所以答案在[first, mid]区间，所以截去后面的即last = mid
//3、如果21222或者22212，中间值和target相等，但答案在左或者右并不确定，那么就让区间慢慢缩小，last=last-1；

function minNumberInRotateArray(rotateArray)
{
    if(rotateArray == 0) return 0;
    let first = 0, last = rotateArray.length;
    while(first < last){
        if(rotateArray[first] < rotateArray[last]){
            return rotateArray[first]
        }
        let mid = first + ((last - first) >>1);
        if(rotateArray[mid] > rotateArray[last]){
            first = mid + 1;
        }
        else if(rotateArray[mid] < rotateArray[last]){
            last = mid;
        }
        else{
            --last;
        }
    }
    return rotateArray[first]
}
