<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title></title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" data-app-id="HagQxbuoFIFIaZlkIMA" src="https://assets.yammer.com/assets/platform_js_sdk.js"></script>
    <script src="script.js"></script>
</head>
<body>
<h2>Yammer JS SDK 101</h2>
<hr>
<form name="myForm" method="get" action="">
 <table cellspacing="0" cellpadding="0" border="0">

   <tr>
   <td align="right">GroupID</td>
   <td>
   <input type="text" name="group_id" id="group_id" /> 
 </td>
 </tr>

 <tr>
   <td align="right">Body</td>
   <td>
<textarea rows="4" cols="50" name="msg_body" id="msg_body"></textarea>
  </td>
 </tr>
<tr>
 <td align="right"></td>
 <td><input type="button" value="Post Message" onclick ="postMessage()" /></td>
 </tr>

 </table>
</form>
</body>
</html>