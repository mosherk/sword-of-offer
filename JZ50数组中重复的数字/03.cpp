//c++中hash表的做法，先记录一下到时再看能否js
//for循环，判断元素是否在hash表中，在则返回值，不在-1
//看题解说hash采用unordered_set容器，而不要采用set，
//unordered_set底层使用的vector+list开链法，
//理论查询时间O(1),set底层采用红黑树，查询时间稳定log(n)


class Solution {
public:
    /**
     * @param numbers int整型vector 
     * @return int整型
     */
    int duplicate(vector<int>& numbers) {
        // write code here
        unordered_set<int> u_set;
        for(int i=0;i<numbers.size();++i){
          if(u_set.count(numbers[i])){//hash表存在
              return numbers[i];
          }else{//不存在
              u_set.insert(numbers[i]);//将该数字加入hash表中
          }
        }
        return -1;
    }
};

