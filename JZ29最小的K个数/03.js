function GetLeastNumbers_Solution(input, k)
{
    if(k > input.length || k === 0){
        return [];
    }
    k = Math.min(k, input.length)
    console.log(k)
    // write code here
    let heap = [];
    for(let i = 0; i < k; i++){
        heap.push(input[i]);
    }
     
    for(let i = (k>>1); i >= 0; i--){
        heapify(heap, k, i);
    }
     
    for(let i = k; i < input.length; i++){
        if(input[i] < heap[0]){
            heap[0] = input[i];
            heapify(heap, k, 0);
        }
    }
     
    let arr = []
     
    while(heap.length >= 0){
        arr.unshift(heap[0]);
        if(heap.length > 1){
            heap[0] = heap.pop();
            heapify(heap, k, 0)
        } else {
            break;
        }
         
    }
    return arr;
     
    function heapify(arr, len, idx){
        while(true){
            let max = idx;
            if(idx * 2 + 1 < len && arr[max] < arr[idx*2+1]){
                max = idx*2+1
            }
             
            if(idx *2 + 2 < len && arr[max] < arr[idx*2+2]){
                max = idx*2+2;
            }
             
            if(idx === max){
                break;
            }
             
            [arr[max], arr[idx]]=[arr[idx], arr[max]];
            idx = max;
        }
    }
}
