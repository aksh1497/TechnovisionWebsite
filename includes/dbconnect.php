<?php
//connection script from ankush patil you can connect to him on github.com/asprazzar	
	 // this will avoid mysql_connect() deprecation error.
	 //error_reporting( ~E_DEPRECATED & ~E_NOTICE );
	 // but I strongly suggest you to use PDO or MySQLi.
	 
	/*
	 define('DBHOST', 'mysql.hostinger.in');
	 define('DBUSER', 'u544032437_anksh');
	 define('DBPASS', 'jonsmJK9bKm');
	 //define('DBNAME', 'dbtest');
	 */
	 define('DBHOST', 'localhost');
	 define('DBUSER', 'root');
	 define('DBPASS', 'fullstack');
	 
	 $conn = mysqli_connect(DBHOST,DBUSER,DBPASS);
	 mysqli_select_db($conn,"onlinegcoej2");	 
	 //$dbcon = mysql_select_db(DBNAME);
	 
	 if ( !$conn ) {
	  die("Connection failed : " . mysql_error());
	 }
	 

 ?>