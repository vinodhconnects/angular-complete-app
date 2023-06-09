### Server side routing

Generally when we perform any of the following operations in a webpage, the 
url in the address bar will change and a request will be sent to server
and the server will resolve it

* Using anchor tag and Href
* Submitting a form
* typing the url directly

since server resolves it and gives a new html page we call it server side
routing

and since new page is loaded we cannot categorize the app is SPA and basically
the app is multipage application

### client Side routing

When doing SPA, we tend to avoid making a server request
while we change the url in the address bar and hence
we need to avoid submit button click, anchor tag + href combination
, direct typing of url [even done will be resolved using client library ]

If url change is resolved by client side library(angular) itself it
is called as client side routing

typically in angular, we do it in two ways

1. Anchor tag without href
2. Programmatically changing the url

