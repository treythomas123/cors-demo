# cors-demo
Simple project to demonstrate the basics of [Cross-Origin Resource](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) Sharing.

To run it:
```
npm install
node index.js
```

`index.js` spins up two HTTP servers -- one to serve an HTML page, and another to serve AJAX requests from a different origin (`http://localhost:8080` vs `http://localhost:8081`).

In addition to the webservers, a `phantom` headless web browser is instantiated, to load the webpage from `8080`. The HTML page just contains a script to make AJAX requests to the server on `8081`, and write to the console to indicate success or failure. 

The AJAX requests succeed due to the headers being attached in the `8081` server. Without the headers, the browser would block the requests from completing, for the security of the data on the `8081` site. 
