<html>
  <head>
    <title>Intro to DOM</title>
  </head>
  <body>
    <h1>Intoduction to DOM</h1>
    <ul>
      <li>DOM Methods example</li>
      <li>DOM Properties example</li>
    </ul>
  </body>
</html>

// To get title h1 using JavaScript
let h1Element = document.getElementsByTagName("h1")[0];
// getElementsByTagName returns an array of all HTML elements with a given tag
// [0] specifies the first h1 element of that array

console.log(h1Element);

// JavaScript can be directlly inserted to HTML document
// Using <script> tag
// HTML DOM Properties are values u can get / set to change web page dynamically
<html>
  <head>
    <title>Intro to DOM</title>
  </head>
  <body>
    <h1>Introduction to DOM</h1>
    <ul>
      <li> DOM Methods example</li>
      <li>DOM Properties example</li>
    </ul>
    <script>
      let h1Element = document.getElementsByTagName('h1')[0];
      console.log(h1Element);
    </script>
  </body>
</html>