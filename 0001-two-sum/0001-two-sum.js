/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
1. input : nums 정수 배열, target 정수
2. return : 합해서 target값이 되는 숫자 2개의 인덱스 배열
3. 주의할 점 : 한개의 solution만 존재, 각 원소당 한번만 리턴값으로 사용 가능

생각나는 풀이 : brute force, hash map 사용할 수 있을듯
나는 hash map을 골라보겠음
1. nums를 돌며 값 : 인덱스 맵 만들기
    1-1. 같은 값이 이미 있다면.... value 부분에 배열로 추가해주기
    1-2. 같은 값이 없다면.... value에 해당 값만 배열로 추가
2. nums를 돌며 target-nums[i] 값이 해시맵 안에 있으면 value값을 받아와서 반복문 실행 해당 인덱스와 i값이 일치하는지 확인
    2-1. 일치하지 않는다면 해당 인덱스와 i값을 배열로 만들어 리턴
    2-2. 일치한다면 다음 value 값의 인덱스 확인
*/
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0;i<nums.length;i++){
         const currentValues = map.get(nums[i]);
        if(!currentValues){
            map.set(nums[i], [i]);
        }else{
            map.set(nums[i],  [...currentValues, i]);
        }
    }
    
    for(let i=0;i<nums.length;i++){
        const currentValues = map.get(target-nums[i]);
        if(currentValues && currentValues.length){
            for(let j=0;j<currentValues.length;j++){
                if(i !== currentValues[j]){
                    return [i,currentValues[j]];
                }
            }
        }
    }
    
};