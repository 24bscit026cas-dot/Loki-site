<!DOCTYPE html>
<html>
<head>
  <title>Simple JavaScript Example</title>
</head>
<body>
  <h1>JavaScript Demo</h1>
  <p id="message">Click the button to see a message:</p>
  
  <button onclick="showMessage()">Click Me</button>


  <script>
    function showMessage() {
      document.getElementById("message").innerHTML = "Hello! You clicked the button.";
      alert("Welcome! JavaScript is working.");
    }
  </script>
</body>
</html>
