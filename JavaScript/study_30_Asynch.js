
function func1() {
  console.log('func1');
}

function func2() {
  setTimeout(function() {
    console.log('func2');
  }, 0);
}

function func3() {
  console.log('func3');
}

func1();
func2();
func3();