<?php

session_start();
$_SESSION['name']="Park";
$_SESSION["age"]= 12;

echo $_SESSION['name'];