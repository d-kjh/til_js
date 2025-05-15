const student_1 = {
  name: "홍길동",
  age: 10,
};
const student_2 = {
  name: "둘리",
  age: 2000,
};

function StudentInfo(_name, _age) {
  this.name = _name;
  this.age = _age;
}
const student_1 = new StudentInfo("홍길동", 20);
const student_2 = new StudentInfo("둘리", 2000);
