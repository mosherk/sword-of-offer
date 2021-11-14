//解法二：二分法  
function Find(target, array)
{
    let m = array.length;
    let n = array[0].length;
    if(m===0 || n===0){
        return false;
    }
    let r = 0 ,c = n-1;
    while(r<m && c>=0){
        if(target == array[r][c]){
            return true
        }else if(target > array[r][c]){
            ++r;
        }else{
            --c;
        }
    }
    return false;
}
Find(5,[[1,3,4],[2,4,7],[3,5,8]])
