// JavaScript source code
Add an event listener to a button.When we click on it should display current date and time.
< html >
    <body>
        <h2>Q1 Event listener to a button to show date</h2>
        <button id="myBtn">Try it</button>
        <p id="demo"></p>
        <script>
            document.getElementById("myBtn").addEventListener("click", displayDate);
            function displayDate() {
                document.getElementById("demo").innerHTML = Date();
      }
        </script>
    </body>
</html >



Show the javascript validation.When you click submit, the text box doesn't need to be empty.
< html >
  <head>
    <script>
      function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "" || x == null) {
          alert("Name must be filled out");
          return false;
        }
      }
    </script>
  </head>
  <body>
    <h2>Q2 JS validation</h2>
    <form
      name="myForm"
      action="/action_page.php"
      onsubmit="returnvalidateForm()"
      method="post"
      required
    >
      Name: <input type="text" name="fname" />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html >



How console.log() can be used for Debugging.
< html >
    <body>
        <h2>Q3 console.log() debugging</h2>
        <p>F12 or crtl+shift+i > sources</p>
        <script>
            a = 8;
            b = 4;
            c = a + b;
            console.log(c);
        </script>
    </body>
</html >



Write functions to set a cookie, get a cookie and check a cookie in a single program.
< html >
  <head>
    <script>
      function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      function checkCookie() {
        let user = getCookie("username");
        if (user != "") {
          alert("Welcome again " + user);
        } else {
          user = prompt("Please enter your name:", "");
          if (user != "" && user != null) {
            setCookie("username", user, 30);
          }
        }
      }
    </script>
  </head>
  <body onload="checkCookie()"></body>
</html >



Create a JSON object and access it using dot notation.
< html >
    <body>
        <h2>Q5 Accessing JSON obj with . notation</h2>
        <p id="demo"></p>
        <script>
            const myJSON = '{"name":"John", "age":30, "car":null}';
            const myObj = JSON.parse(myJSON);
            document.getElementById("demo").innerHTML = myObj.name;
        </script>
    </body>
</html >
