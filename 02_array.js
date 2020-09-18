//객체 지향 언어의 상속 개념과 같이 부모 객체의 프로퍼티를 사용할 수 있는 특징이 있다.
//이러한 부모 객체를 프로토타입 객체라고 한다.
//객체를 생성할 때 결정된 프로토타입 객체는 임의의 다른 객체로 변경 가능 => 즉, 부모 객체를 동적으로 바꿀 수 있다. (상속 구현)

//////////////////////////////// 배열 ////////////////////////////////
//C언어, JAVA와는 다르게 생성할때 굳이 크기 지정을 안해도 된다. => 동적으로 배열 원소 추가 가능
//배열 리터럴 : 대괄호([])


//기본적인 배열 생성
var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];
console.log(colorArr[2]);

//javascript의 배열의 경우 값을 순차적으로 넣을 필요 없이 아무 인덱스 위치에나 값을 동적으로 추가할 수 있다.
//대신 배열의 크기 값은 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정한다.
//하지만 실제 메모리는 length 크기처럼 할당되지는 않는다.
var emptyArr = [];
emptyArr[0] = 100;
emptyArr[3] = 'four';
emptyArr[7] = true;

console.log(emptyArr);
console.log(emptyArr.length);           //크기 : 8

//배열 length 프로퍼티의 명시적 변경
emptyArr.length = 4
console.log(emptyArr);
console.log(emptyArr.length);           //크기 : 2

//push() 메서드 -> length 프로퍼티가 가리키는 인덱스에 값 저장
emptyArr.push('six');
console.log(emptyArr);

emptyArr.length = 1;
emptyArr.push('two');
console.log(emptyArr);

//배열의 동적 프로퍼티 생성 및 삭제
var arr = ['zero', 'one', 'two'];
console.log(arr.length);            //출력값 : 3

arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length)             //출력값 : 3

console.dir(arr);                   //배열 객체 출력

//해당 인덱스의 요소 값을 undefined로 설정할 뿐 원소 자체를 삭제하지는 않는다.
delete arr[2];
console.log(arr);
console.log(arr.length);



//배열에서 요소들을 완전히 삭제할 경우 => splice() 배열 메서드 사용
//splice(start, deleteCount, item, ...)
//start: 배열에서 시작할 위치
//deleteCount: start에서부터 삭제할 요소의 수
//item: 삭제할 위치에 추가할 요소
arr = ['zero', 'one', 'two', 'three'];

arr.splice(2,1);                //배열의 2번째 위치에 있는 1개 요소 삭제
console.log(arr);
console.log(arr.length);        //출력값: 3


//Array() 생성자 함수
var foo = new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3);
console.log(bar);
console.log(bar.length);


//////////////////////////////// 연산자 ////////////////////////////////
//대부분의 연산자는 동일하지만 다른 연산자만 기록

// == (동등) 연산자와 === (일치) 연산자
// == : 비교하려는 피연산자의 타입이 다를 경우 타입 변환을 거친 다음 비교
// === : 타입 변경하지 않고 비교

console.log(1 == '1');          //true
console.log(1 === '1');         //false


//!!연산자 => 피연산자를 불린값으로 변환

console.log(!!0);               //false
console.log(!!1);               //true
console.log(!!'string');        //true
console.log(!!'');              //false
console.log(!!true);            //true
console.log(!!false);           //false