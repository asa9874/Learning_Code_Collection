<?php

setcookie("username","asa",time()+3600,"/");
echo $_COOKIE["username"];