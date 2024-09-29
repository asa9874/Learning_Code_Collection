

<!-- HTML 폼 -->
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="name">이름 (POST):</label>
    <input type="text" name="name" id="name">
    <input type="submit" value="POST 요청">
</form>

<br>

<form method="get" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="name">이름 (GET):</label>
    <input type="text" name="name" id="name">
    <input type="submit" value="GET 요청">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // POST 요청이 있을 때 실행되는 코드
    $name = htmlspecialchars($_POST['name']);
    echo "POST로 받은 이름: " . $name;
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // GET 요청이 있을 때 실행되는 코드
    $name = htmlspecialchars($_GET['name']);
    echo "GET으로 받은 이름: " . $name;
}
?>