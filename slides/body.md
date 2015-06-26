## Browser Technologies
by Alex Ramos and Drew Lawton


---

## Front-end Engineering
### Build consistent UX across: <!-- .element: class="fragment" -->
<ul>
	<li class="fragment">Multiple operating systems</a></li>
	<li class="fragment">Multiple rendering engines</a></li>
	<li class="fragment">Multiple proprietary features</a></li>
	<li class="fragment">Variable computing power</a></li>
	<li class="fragment">Variable screen resolution</a></li>
	<li class="fragment">Variable connection speeds</a></li>
</ul>
---

# The Web Browser
## a flexible, volatile platform <!-- .element: class="fragment" -->

---

## Based on common standards*
<ul>
	<li class="fragment">HyperText Markup Language (HTML & XHTML) from [W3C](http://www.w3.org/)</a></li>
	<li class="fragment">Cascading Styles Sheets (CSS) from [W3C](http://www.w3.org/)</a></li>
	<li class="fragment">Document Object Model (DOM) from [W3C](http://www.w3.org/)</a></li>
	<li class="fragment">ECMAScript (JavaScript) from [Ecma International](http://www.ecma-international.org/)</a></li>
	<li class="fragment">Hyper Text Transfer Protocol (HTTP) from [IETF](https://www.ietf.org/)</a></li>
</ul>
<br><br>

<span class="fragment"><i>* More like loosely followed recommendations</i></span>
---

## Quick History
First Web Server & Browser created at CERN <!-- .element: class="fragment" -->
![first-server](/slides/images/first-server.jpg) <!-- .element: class="fragment" -->

Designed for sharing technical documents <br/> between physicists <!-- .element: class="fragment" -->

---

## Quick History (CONT)

<ul>
<li class="fragment">The first graphical browser: Mosaic</li>
<li class="fragment">Lead of Mosaic team quit, created Netscape</li>
</ul>

![browser-battle](/slides/images/netscape-logo.gif) <!-- .element: class="fragment" -->

- Microsoft bought Internet Explorer from Spyglass, Inc.  <!-- .element: class="fragment" -->

![browser-battle](/slides/images/ie6-logo.png) <!-- .element: class="fragment" -->

---

## Browser Wars Commence
![browser-battle](/slides/images/browser-battle.jpg)

---

# Designed for documents

---

## A Haunted Platform
<ul>
	<li class="fragment">Build for least capable audience</a></li>
	<li class="fragment">Old browsers die hard</a></li>
	<li class="fragment">~3% of Web Traffic from China is IE6 (14 years old)</a></li>
</ul>

![ie6](/slides/images/ie6.png) <!-- .element: class="fragment" -->

---

## Evergreen browsers
<ul>
	<li class="fragment">Capable of auto-updating, separate from OS version</a></li>
	<li class="fragment">Chrome, Firefox, Safari, IE 10+</a></li>
	<li class="fragment">Starting to happen in mobile browsers also</a></li>
</ul>

---

## Start Your Engines

<table>
	<tr style='font-size: 26px; text-align: center;'>
		<td>Browser</td>
		<td width="300px">Layout Engine</td>
		<td>JavaScript Engine</td>
	</tr>
	<tr class="fragment">
		<td>Internet Explorer</td>
		<td>Trident</td>
		<td>Chakra</td>
	</tr>
	<tr class="fragment">
		<td>FireFox</td> 
		<td>Gecko</td>
		<td>TraceMonkey</td>
	</tr>
	<tr class="fragment">
		<td>Chrome</td>
		<td>Blink</td>
		<td>V8</td>
	</tr>
	<tr class="fragment">
		<td>Safari</td>
		<td>Webkit</td>
		<td>Nitro</td>		
	</tr>
	<tr class="fragment">
		<td>Opera</td>
		<td>Presto</td>
		<td>Carakan</td>
	</tr>
</table>

<span class="fragment">* Microsoft Edge fork of Trident engine<br>Opera switched to Blink, V8</span>

---

## Current Browser Landscape
<ul>
	<li class="fragment"><a href="https://stats/#/views/Bnet-browserinfo-fromdecember2014/BrowserInfo-Global?:iid=1" target="_blank">Blizzard Traffic by Browser</a></li>
	<li class="fragment">Recent Mobile SEO changes by Google</a></li>
</ul>

---

## Compatibility Resources
<ul>
	<li class="fragment">Tribal knowledge :(</li>
	<li class="fragment">[www.caniuse.com](http://caniuse.com) <!-- .element: target="_blank" --></li>
	<li class="fragment">[www.webplatform.org](https://docs.webplatform.org/wiki/Main_Page) <!-- .element: target="_blank" --></li>
	<li class="fragment">[Mozilla Developer Network](https://developer.mozilla.org/en-US/) <!-- .element: target="_blank" --></li>
	<li class="fragment">[Modernizr](http://modernizr.com/) <!-- .element: target="_blank" --></li>
</ul>

---



## Features & APIs



---



## Document Object Model (DOM)
- interface for HTML and XML documents.  <!-- .element: class="fragment" -->
- structured representation of the document  <!-- .element: class="fragment" -->
- DOM accessible through scripting languages, allowing changes to the document structure, style and content.  <!-- .element: class="fragment" -->



---



## Javascript & DOM
<pre><code class="javascript">
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
