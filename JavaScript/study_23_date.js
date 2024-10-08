
const date1= new Date()
const date2= new Date(0)
const date3= new Date('2019/05/16/17:00:10')
const date4= new Date('June 16, 2011 11:23:12')
const date5 = new Date(2021);
const date6 = Date()//문자열로 반환

Date.parse('Jan 2, 1970 09:00:00');//밀리초로 반환
Date.UTC(2002,12,14);//밀리초로 반환


const today= new Date();
today.setFullYear(2000);//년도 설정
today.setMonth(12);//월 설정
today.setDate(22);// 날짜 설정
today.setHours(1)//시 설정
today.setMinutes(30)//분설정
today.setSeconds(20)//초 설정
today.setMilliseconds(10)//밀리초설정
today.setTime(86400000)//UTC기점 밀리초 설정

today.getFullYear()//4자리 년도 반환
today.getMonth()//월 반환
today.getDate()//날짜 반환
today.getDay()//요일 반환
today.getHours()//시 반환
today.getMinutes()//분 반환
today.getSeconds()//초 반환
today.getMilliseconds()//밀리초 반환
today.getTime()//UTC기점 밀리초 반환
today.getTimezoneOffset()// UTC시간과의 차이를 분단위 반환
today.toDateString()//문자열로 날짜반환
today.toTimeString()//문자열로 시간반환

