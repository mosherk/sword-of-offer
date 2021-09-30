//各个结点的情况需要看看
function TreeDepth(pRoot)
{
    if(!pRoot){
        return 0
    }
    let left = TreeDepth(pRoot.left)
    let right = TreeDepth(pRoot.right)
    return Math.max(left,right)+1
//     return Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right))+1;
}
