<?php

$name="홍길동";
echo "안녕하세요, $name 세계에 오신 것을 환영합니다!";

// 초기화되지 않은 변수 선언
$var1; // 정수형 기본값 0
$var5=$var1+1;
// 변수 사용
echo "var1: $var5 <br>"; // 1




function myFunction() {
    $localVar = "나는 로컬 변수입니다."; // 로컬 변수
    echo $localVar; // 함수 내부에서 접근 가능
}

myFunction(); // 출력: 나는 로컬 변수입니다.

// echo $localVar; // 오류: Undefined variable


function counter() {
    static $count = 0; // 정적 변수
    $count++; // 변수 값을 증가
    echo "함수 호출 횟수: $count<br>";
}

counter(); // 출력: 함수 호출 횟수: 1
counter(); // 출력: 함수 호출 횟수: 2
counter(); // 출력: 함수 호출 횟수: 3



// 상수 정의
define("VERSION", 1.0);

// 상수 사용
echo "버전: " . VERSION . "<br>"; // 출력: 버전: 1


$list1 = array(1,2,3,4);
$array = array();  
$array["key"] = "value";

$array2 = array("a" => 12 , "b" => 20 );

function myFunction2($x, $y) {
    return $x + $y;
}

$a=myFunction2(1,2);