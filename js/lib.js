/**
 * 입력된 매개 변수 만큼 총합 계산하기
 * @param {number} num - 숫자 값
 */
function showTotal(...rest) {
  console.log(arguments);
  console.log(rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + rest[i];
  }
  return total;
}
const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
