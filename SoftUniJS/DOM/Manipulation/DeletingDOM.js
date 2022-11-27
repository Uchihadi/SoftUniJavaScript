<article id="post">
  <h1 id="title">Greeting post</h1>
  <p id="content">Hello everybody and welcome to the website.</p>
</article>

let parent = document.getElementById("post"); // returns the article element
let title = document.getElementById("title"); // returns the h1 element
let content = document.getElementById("content"); // returns the p element

title.remove(); // directly removes the DOM element

parent.removeChild(content); // removes the element by accessing its parent