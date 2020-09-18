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


//////////////////////////////// 배열과 객체의 차이 ////////////////////////////////
//javascript에서는 배열 역시 객체이지만 약간의 차이가 있다.

