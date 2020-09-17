//////////////////////////////// 객체 만드는 방법 3가지 ////////////////////////////////
// 1. Object() 생성자 함수 이용
var foo1 = new Object();

//foo 객체 프로퍼티 생성
foo1.name = 'foo1';
foo1.age = 30;
foo1.gender = 'male';

console.log(typeof foo1);        //(출력값) object
console.log(foo1);               //(출력값) { name: 'foo', age: 30, gender: 'male' }



// 2. 객체 리터럴(표기법) 방식 이용
var foo2 = {
    name : 'foo2',
    age : 30,
    gender : 'male'
};

console.log(typeof foo2);        //(출력값) object
console.log(foo2);               //(출력값) { name: 'foo', age: 30, gender: 'male' }



// 3. 생성자 함수 이용 (4장에서 기술)


//////////////////////////////// 객체의 프로퍼티 접근하기 ////////////////////////////////
//객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name : 'foo',
    major : 'computer science'
};

//객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

//객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

//객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

//대괄호 표기법만 사용해야 하는 경우 (표현식 or 예약어의 경우)
foo['full-name'] = 'foo bar';       //'-'연산자가 있는 표현식 프로퍼티
console.log(foo['full-name']);
//console.log(foo.full-name);
//console.log(foo.full);
//console.log(name);


//for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {     //prop변수에 foo 객체의 프로퍼티가 하나씩 할당된다.
    console.log(prop, foo[prop]);
}


//delete를 이용한 객체 프로퍼티 삭제
delete foo['full-name'];
console.log(foo['full-name']);

delete foo;             //(객체 자체는 삭제 불가능)
console.log(foo.name);




//////////////////////////////// 참조 타입의 특성 ////////////////////////////////
var objA = { val : 40 };
var objB = objA;

console.log(objA.val);  //(출력값) 40
console.log(objB.val);  //(출력값) 40

objB.val = 50;
console.log(objA.val);  //(출력값) 50
console.log(objB.val);  //(출력값) 50

/*
javascript에서는 객체를 참조 타입이라고 부른다. 객체의 모든 연산은 참조값으로 처리된다. 
따라서, objA 변수는 객체 자체를 저장하고 있는 것이 아니라 생성된 객체를 가리키는 참조값을 저장하고 있다.
objA와 objB는 같은 객체를 가리키는 참조값을 가진다.
*/