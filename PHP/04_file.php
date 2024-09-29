<?php
$file= fopen("./04_txt.txt","r+");
echo fread($file,10);
echo fgets(stream: $file);
echo file_get_contents("./04_txt.txt");

fwrite($file,"반갑습니다...");
fclose($file);

?>