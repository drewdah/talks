WFE-Lecture 2: Browser Tech
0. Intro
	- Broad Overview over existing browsers, and some of the major features supported,
1.	Current browser landscape
	- Tableu link: https://stats/#/views/Bnet-browserinfo-fromdecember2014/BrowserInfo-CN?:iid=3
	1.	webkit (Chrome, CEF, Safari, Opera)
	2.	IE 8, 9, 10, 11
	3.	gecko (Firefox)

2.	Compat resources:
	- caniuse
	- MDN
	- w3schools

3.	Notable features/APIs
	1.	DOM
		- interface for HTML and XML documents.
		- structured representation of the document and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content.
		- API available for javascript to use, to access DOM
			- window, document
			- jquery abstracts that, unifies different implementations
			- nowadays no longer AS necessary
	2.	XHR, JSONP
		- XHR
			- Short for XMLHttpRequest
			- Easy way to retrieve data from URL without page refresh
			- Can retrieve any type of data, not just XML, supports file, ftp protocol
			- jQuery/ajax simplifies it
			- (insert example)
		- JSONP
			- request data from a server in a different domain, something prohibited by typical web browsers because of the same-origin policy
				- same-origin-policy
				- code example

	3.	Canvas / WebGL, requestAnimationFrame
		- Mozilla applications gained support for <canvas> starting with Gecko 1.8 (i.e. Firefox 1.5). The element was originally introduced by Apple for the OS X Dashboard and Safari. Internet Explorer supports <canvas> from version 9 onwards; for earlier versions of IE, a page can effectively add support for <canvas> by including a script from Google's Explorer Canvas project. Google Chrome and Opera 9 also support <canvas>.

		- The <canvas> element is also used by WebGL to do hardware-accelerated 3D graphics on web pages.
		- code sample
		- http://lab.hakim.se/checkwave/
		- http://hakim.se/experiments/html5/trail/03/
		- game?


	4.	SVG (example: Eckel .meet deck)
		- Scalable Vector Graphics (SVG) is an XML markup language for describing 2D vector graphics.
		- built through xml, rather then script like canvas
		- http://www.htmlgoodies.com/html5/other/html5-canvas-vs.-svg-choose-the-best-tool-for-the-job.html#fbid=ANNAzWtkpIJ

	5.	WebSockets, server sent events
	- makes it possible to open an interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.
	- server, client
	- insert demo?

	6.	Video (codec challenges, etc)
	- The HTML <video> element is used to embed video content. 
	- Table of formats
	- source/ demo
	
	7.	Web Workers, postMessage
		- Web Workers provide a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML  and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa.) This article provides a detailed introduction to using web workers.

	8.	localStorage, IndexedDB
	localStorage is the same as sessionStorage with same same-origin rules applied but it is persistent. localStorage was introduced in Firefox 3.5.

	// Save data to the current session's store
	sessionStorage.setItem("username", "John");

	9.	WebRTC

	WebRTC (where RTC stands for Real-Time Communications) is a technology that enables audio/video streaming and data sharing between browser clients (peers). As a set of standards, WebRTC provides any browser with the ability to share application data and perform teleconferencing peer to peer, without the need to install plug-ins or third-party software. 

	WebRTC components are accessed with JavaScript APIs: the Network Stream API, which represents an audio or video data stream, the PeerConnection API, which allows two or more users to communicate browser-to-browser, and the DataChannel API that enables communication of other types of data for real-time gaming, text chat, file transfer, and so forth.


	10.	Navigation and User timing
		- possibly GA,
		
	11.	Mobile APIs (vibration, geo, orientation, touch, etc)
	- apis
4.	XHTML
