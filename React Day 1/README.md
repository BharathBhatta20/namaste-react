# namaste-react
1. What is Emmet?

Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. using Emmet in VS code we can type HTML and CSS in shortcuts.

2. What is the difference between Library and Framework ?

When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow.

3. What is CDN? Why do we use it ?

A CDN is essentially a group of servers that are strategically placed across the globe with the purpose of accelerating the delivery of web content. 

4. Why React is called as React ?

It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.

5. What is cross-origin in script tag ?

The crossorigin attribute, valid on the <audio>, <img>, <link>, <script>, and <video> elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.

6. What is the difference between React and React DOM?

React maintain basic functionaity of converting the JSX to Javascript synatx.
ReactDOM manages advanced functionality like rendering of DOM and routing etc.

7. What is the difference between react.development.js and react.production.js ?

Development build runs the code as a Development environment and it is very slow. The production environment executes the code and is used by developers and QA people It Development, supports

Generating Source Maps files for CSS, and helping developers to debug the code about original files
Hot reloading enables you to reload changes without restarting the server
Debugger available to debug the code in the browser console
It creates a single bundle.js file
Enable React Developer tools
React DevTools Profiler
Production build is for running the code on client browsers with more performance improvements.

The production environment executes the code and is used by end users or customers

It has separate bundle files for app and vendor instead of a single bundle file
Minification and compression of javascript and HTML resources to reduce the size of a file.
Source Map can be disabled at runtime to reduce the size of the code
Also, Gzipping code to compress and reduce the size.

8. What are async and defer?

When the browser loads HTML and comes across a <script>...</script> tag, it can’t continue building the DOM. It must execute the script right now. The same happens for external scripts <script src="..."></script>: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

That leads to two important issues:

Scripts can’t see DOM elements below them, so they can’t add handlers etc.
If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:

The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

The async attribute is somewhat like defer. It also makes the script non-blocking. But it has important differences in the behavior.

The async attribute means that a script is completely independent:

The browser doesn’t block on async scripts (like defer).
Other scripts don’t wait for async scripts, and async scripts don’t wait for them.