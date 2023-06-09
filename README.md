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

When we are configuring angular Routing we should focus on Three things

1. Target Template location where the associate route component to be loaded
(for this we call a component called router-outlet which is part of routing module)

2. We should configure our anchor tags (if at all you are handling
routes using anchor tag)  with input directive called routerLink
instead of href

3. add the routing configuration where we map paths with components


#### HttpClient Service and HttpClientModule

In angular applications, we extensively call Rest apis from 
services,

To Deal with rest api calls, Angular has an exclusive library
called HttpClientModule which contains a service called HttpClient

By using HttpClient we can call all http methods like GET, POST, PUT, DELETE ,PATCH etc

All the above methods would return an object of type Observable

#### Observable

We know that Rest API calls are asynchronous in nature

usually to deal with asynchronous code we use promise and
to handle promise type we use async function and await keyword

angular JS 1.x library uses promise to deal with Asynchronous code

but Angular 2 and above decided to use a framework called RxJS

In RxJs, We have a Type called Observable used instead of
Promise

and Observable is an object which would be waiting
for communication from function which returned observable

Difference b/w a promise and observable is promise can be resolved/rejected
only once whereas observable can get value from the function one or more times
and we also have option to unsubscribe an observable whereas with a promise
it is not possible
# Custom Directives

   We can create a custom input directive, output direct, structural directive
  
  We implemented Input directive
### Pipes

  Pipe  is an angular feature which is meant to do two activities

  * format the the target data [ if data variable is scalar [string,number,boolean,date]]

    ex:  upperCase pipe would convert target string to uppercase
         currency pipe would convert number into currency Format based on country
         date pipe would convert Date into a particular format based on date format given


  * can be used to filter the values when applied on array

  ex:  there is no inbuilt pipes in angular to apply on arrays
  but we can create our own pipes, usually if we apply pipe on array
  we filter elements


  pipe has three parts and syntax of applying pipe is

  {{ target | pipename:parameter1:parameter2.....}}

   ex: 

   {{price | currency: "USD"}}

   price is target, currency is pipe name, USD is parameter

   for pipes, parameter is not mandatory

   {{name | upperCase}}

   if name is raj , after apply pipe it would print RAJ
   if prices is 3000, after applying pipe it would $3000

   


### Form Handling in Angular 

   In angular to handle form we follow two approaches

   1. Template based approach
      
         In this approach we use FormsModule and Directive called as ngModel

         Advantange:

           Easy and quick to implement

           Two way binding

         Disadvantage

           No inbuilt validation features available
           may not be suitable for handling File input  

   2. Model Based Approach

         We use a Class call FormBuilder to build a model for all
         the form elements

         we use other directives and Classes like formcontrol, Validator
         etc to deal with the form

         Advantage

         Complex forms can be systematically handled
         Inbuilt validations are available
         File upload can be handled
         any kind of form can be handled

         Disadvantage

         bit complex approach
         time consuming
         Not two way bound