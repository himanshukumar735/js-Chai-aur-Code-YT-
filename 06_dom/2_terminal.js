document.getElementById('title')    // by writing document, we get the access of all document (website) and with 'getElementById' we are getting access of that specific id rltd entities. whose output is given below
// <h1 id="title" class="heading">DOM learning on Chai aur Code</h1>

document.getElementById('title').id     // we will get the output as 'title'. we can get the class also

document.getElementById('title').class      // we will get the output as 'undefined' bcs in backend it is known by className

document.getElementById('title').className      // now we will get the log as 'heading'

// alternately we can get the class or id by 'getAttribute()' also

document.getElementById('title').getAttribute('id')     // this will log 'title'

document.getElementById('title').getAttribute('class')     // this will log 'heading'


// beside getting attribute, we can set attribute directly in the console without touching our HTML file

document.getElementById('title').setAttribute('class', 'testHeading')      // this will change the existing class from 'heading' to 'testHeading'

document.getElementById('title').setAttribute('class', 'testheading newTestHeading')      // this will change the existing class(one) from 'heading' to 'testHeading' and 'newTestHeading'

const title = document.getElementById('title')      // we are storing the result into title variable for easy access and the value stored is " <h1 id="title" class="heading">DOM learning on Chai aur Code</h1>"

title.style.backgroundColor = 'red'         // now we have change the background color of heading 'DOM learning on Chai aur Code, to red

title.style.borderRadius = '15px'

title.innerText     // displys only the content which is visible on the web page

title.textContent       // displays the text content even which are hidden by some css entity for a normal person

title.innerHTML     // it displays the whole text along with all the HTML and inline CSS used

document.querySelector('h2')    //it selects the first h2

document.querySelector('#title')    // we can target by using id also 

document.querySelector('.heading')      // now we are targetting it via class   

document.querySelector('input[type="password"]')        //now we have selected the input field

const myUl = document.querySelector('ul')       // target ul tag and we are storing the result into 'myUl' variable

myUl.querySelector('li')

const greenText = myUl.querySelector('li')    // now the first li is targeted and stored in 'greenText' variable  

greenText.style.color = 'green'     // now the first li item font color is updated to green

document.querySelector('ul').querySelector('li').style.color = 'green'      // this single line is replacement of those above 4  lines

// now targeting the li items with the help of index
document.querySelectorAll('li')  // it select all the list items available on the site. when we will run this and observe, at first glance it will look like that we have got an array but we have got a node list (a type of list). we can verify that we have not got an array by going into the prototype. there we wont see operation or loops like map() or push() which states that it is not an array but a list

tempLiList = document.querySelectorAll('li')

tempLiList[0].style.color = 'green'     // although it is a list, we can use this syntax bcs nodelist behaves slightly like an array. thatswhy we use 0 as an index to change the first li color to green

//same goes with h1 also bcs querySelectorAll gives a nodelist not an array but this nodelist has some characteristics like array have

tempLiList = document.querySelectorAll('h1')

tempLiList[0].style.color = 'green'

// now using the for each loop on the node list
tempLiList = document.querySelectorAll('li')

tempLiList[0].style.color = 'green'

tempLiList.forEach(function (l) {
    l.style.backgroundColor = 'red'
})

// now we are manipulating the document using classname now

document.getElementsByClassName('list-item')      // when we will run this, now we wont get nodelist anymore. now we will get HTML collection and when we will further inspect. we wont find any foreach or any loop. so in order to manipulate the document. we first need to convert it into array

const tempClassList = document.getElementsByClassName('list-item')

Array.from(tempClassList)   // now we will get the array related method or loops which we can see by going in the dropdown menu

const myConvertedArray = Array.from(tempClassList)

myConvertedArray.forEach(function(li){li.style.color = 'red'})
