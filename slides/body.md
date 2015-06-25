## Browser Technologies
by Alex Ramos and Drew Lawton



---



## Current Browser Landscape



---




## Compatability Resources




---



## Features & APIs



---



## Document Object Model (DOM)
- interface for HTML and XML documents.  <!-- .element: class="fragment" -->
- structured representation of the document  <!-- .element: class="fragment" -->
- DOM accessible through scripting languages, allowing changes to the document structure, style and content.  <!-- .element: class="fragment" -->



---



## Javascript & DOM
<pre><code class="javscript">
// get a DOM node by ID
var element = document.querySelector("#javascript-dom");

// change text alignment and color
element.setAttribute("align", "left");
element.style.background = "red";
element.style.border = "4px solid blue";
</code></pre>



---



## Varying DOM implementations
<pre><code class="javscript">
var element = document.querySelector("#home");
// IE8 supports only simple selectors.
var element = document.querySelector("#home p");
// IE8 vs everyone else
element.setAttribute("class", "large");
element.setAttribute("className", "large");
</code></pre>

---



## jQuery & the DOM
- Used to abstract away these inconsistencies
- jQuery uses the appropriate API based on the current browser
<pre><code>
	$('#home').addClass('large').css('border', '4px solid red');
</code></pre>
- More prevalent and necessary pre IE8.
- With IE8 in decline, a life without jQuery is possible!

---


## QuirksMode

http://www.quirksmode.org/dom/



---



## XHR
- Short for XMLHttpRequest
- Easy way to retrieve data from URL without page refresh
- Can retrieve any type of data, not just XML, supports file, ftp protocol



---


## XHR example
<pre><code>
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    var completed = 4;
    if(xhr.readyState === completed){
        if(xhr.status === 200){
            // do actions with xhr.responseText
						buildUserPanel(xhr.responseText);
        }else{
            // handle the error
        }
    }
};
xhr.open('GET', '/endpoint', true);
xhr.send(null);
</code></pre>



---



## XHR Live example
http://us.battle.net/wow/en/



---



## JSONP
- same-origin-policy
- requesting data from a server in a different domain prohibited
- &lt;script&gt; tags are not restricted

<pre><code class="html">&lt;!--
Define a function that will be executed once the data is received.
-->
&lt;script&gt;
function apiStatus(data) {
  console.log(data.status);
}
&lt;/script&gt;

&lt;!--
Request sent via a script tag,
once finished apiStatus(data) will be executed.
--&gt;
&lt;script src="https://status.github.com/api/status.json?callback=apiStatus"&gt;&lt;/script&gt;

</code></pre>


---



## Canvas / WebGL, requestAnimationFrame
- scriptable rendering of 2d shapes and bitmap images
- html code, define width and height
- Use javascript API to draw shapes.
- common uses: graphs, animations, games
- simple example
- demo
- requestAnimationFrame

---



## SVG (.meet deck?)
- xml based vector image format for 2d graphics
- defined in xml
- ie9 basic support.
- code example
- demo




---



## Websockets
- interactive communication session between users browser and server.
- Send messages to a server and receive event-driven responses without polling the server
- commonly used for chat rooms, status updates
- facebook?


---



## Video
- new standard for video, that doesnt require a plugin.
- lots of disagreement about codecs among browsers, making it lack cross-browser compatability
- different support for different codecs
- show table
- code example
- screenshot of different videos?

---



## Web Workers, postMessage



---



## localStorage, IndexedDB
### localStorage
- key value store, for the current domain
- available to all scripts on the page
### sessionStorage
- per origin, per window key value storage.
-- supported across all browsers




---



## WebRTC



---



## Navigation and User Timing



---



## Mobile APIs



---



## XHTML



---




# The End