// //const { default: axios } = require(axios);

// //const { default: axios } = require("axios");

//  document.getElementById("btn").addEventListener('click',makeRequrest);

// // function makeRequrest(){
// //    console.log('vk')

// //    axios.get('data.json').then((res)=>{
// //     console.log(res.data)
// //    })
// // }

// // function makeRequrest(){
// //    console.log('vk')

// //    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
// //     console.log(res)
// //     console.log(res.data)
// //     document.getElementById('divData').innerText =res.data.name;
// //     document.getElementById('name').innerText =res.data[0].name;
// //     document.getElementById('username').innerText =res.data[0].username;

// //      //console.log(res.data[0].email)
// //    })
// // }

// // async function makeRequrest(){
// //    console.log('asdjfklasjd')
// //    try{

// //       const res = await axios('https://jsonplaceholder.typicode.com/posts')
// //          console.log(res.data)

// //          res.data.forEach(element => {
// //             console.log(element.id)
// //          });
// //    }catch(error){
// //       console.log(error)
// //    }
// // }

// //https://reqres.in/api/users?page=2
// //https://reqres.in/api/users
// //https://reqres.in/api/users

// // function makeRequrest(){
// //    console.log("saldkjflkasjd;")

// //    const config = {
// //       mehtod:'POST',
// //         url:'https://reqres.in/api/users',

// //       headers:{
// //          'contant-type':'application/json' ,
// //       },
// //         data:'{"name":"lalu","Job":"Devloper"}'
// //    }

// //    axios(config).then((res)=>{
// //       console.log(res.data)
// //    }).catch((error)=>{
// //       console.log(error)
// //    })
// // }
// //https://reqres.in/api/users

// // function makeRequrest(){
// //    console.log("Button Clicked");

// //    const config ={
// //       method:'POST',
// //       headers:{
// //          'Content-Type':'application/json'
// //       },
// //    }
// //    axios.post('https://reqres.in/api/users','{"name":"manni","job":"webDev"}',config).then((res)=>{
// //       console.log(res.data);
// //    }).catch((error)=>{
// //       console.log(error);
// //    })
// // }

// // function makeRequrest(){
// //    console.log("btn click");
// //    let url='https://reqres.in/api/users';
// //    let data='{"name":"gost","jodb":"app"}'

// //    const config = {
// //       method:'POST',
// //       headers:{
// //          'Content-Type':'appliction/json'
// //       },
// //    }
// //    axios.post(url,data,config).then((res)=>{
// //       console.log(res.data);
// //    }).catch((err)=>{
// //       console.log(err)
// //    })
// // }

// // async function makeRequrest(e){
// //    e.prevntDefault()
// //    console.log("okkk")
// //    // let name = document.getElementById('name').value
// //    // let job = document.getElementById('job').value
// //    try {
// //       const config = {
// //                //method:'POST',
// //                 //url:'https://reqres.in/api/users',

// //                headers:{
// //                   'Content-Type':'appliction/json'
// //                },
// //                data:JSON.stringify({name:name,job:job})
// //             }
// //        const res = await axios.post('https://reqres.in/api/users',data,config)
// //        console.log(res.data)

// //    } catch (error) {
// //       console.log(error)
// //    }
// // }

// // function makeRequrest(e){
// //    e.preventDefault()
// //    let name = document.getElementById('name').value
// //    let job = document.getElementById('job').value
// //    console.log("click")

// //    const config = {
// //       method:'PSOT',
// //       url:'https://reqres.in/api/users?page=2',
// //       headers:{
// //          'Content-Type' : 'application/json'
// //       },
// //        data:JSON.stringify({name:name,job:job})
// //    }

// //    axios(config).then((res)=>{
// //       console.log(res.data);
// //    }).catch((error)=>{
// //       console.log(error)
// //    })
// // }

// //async function makeRequrest(e){
// //    e.prevntDefault()
// //    console.log("okkk");
// //    let name = document.getElementById('name').value
// //    let job = document.getElementById('job').value
// //    try {
// //       const config = {
// //                method:'POST',
// //                url:'https://reqres.in/api/users',

// //                headers:{
// //                   'Content-Type':'appliction/json'
// //                },

// //                data:JSON.stringify({name:name,job:job})
// //             }
// //        const res = await axios(config)
// //        console.log(res.data)

// //    } catch (error) {
// //       console.log(error)
// //    }
// // }

// axios.defaults.headers.common['Authorization'] = '9832rhewfq98ryiugqef87qwtr';

// async function makeRequrest(){
//    console.log("btn-click");
//    axios('https://reqres.in/api/users').then((res)=>{
//   console.log(res.data)
//    })

// }

// document.write("hello")

// var loginScreen =1;

// var option = loginScreen=0? 'login' : 'logout' ;

// document.write(option)

// let age =confirm("enter your age");
// //document.write(age);
// if(age){
//     document.write('age');
// }else{
//     document.write("not age");
// }

// var str = 'welcome to Biet chat in indias first online chating platform';
// var str1 = str.substr(11,9);
// document.write(str1);

// var arr = ["apple","mango","pineapple","banana","orange"];
// console.log(arr);

// arr.push("date");
// console.log(arr);

// arr.unshift("lichi");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(1,3);
// console.log(arr);

// var eString = "nothing but everything is happen in the life";
// console.log(eString);
//  var change=eString.split(' ');
// console.log(change);

//var arr = ["apple", "mango", "pineapple", "banana", "orange"];

// for(var i=0;i<arr.length; i++){
//     // console.log(`Element  ${i} is ${arr[i]}`)
//     document.write(`Element  ${i} is ${arr[i]}\n`)
// }

// function func() {
//   if (arguments == 0) {
//     console.log("there is no parameres");
//   } else {
//     sum = 0;
//     for (var i ; i < arguments.length; i++) {
//       sum = sum + arguments[i];
//     }
//     console.log(sum);
//   }
// }

// function add(){
    
//    if(arguments.length === 0){
//     console.log("Empty parameter!");
//    }
//    else{
//     var sum = 0;
//     for (var i=0 ; i < arguments.length; i++) {
//       sum = sum + arguments[i];
//     }
//     //console.log(sum);
//     document.write(sum)
//    }
// }

// add(12,2,10);
// var car;

// (function add(){
//   var result = 10;
//   car=30;
//   console.log(car);
//   console.log(result);
// })();

// function sub(){
//   car=40;
//   console.log(car);
//   var result = 20;
//   console.log(result);
// }

// //add();
// sub();

// setTimeout(add,300);


// (function (){
//   car=40;
//   console.log(car);
//   var result = 20;
//   console.log(result);
// })();

// const person = {
//   name:'nick',
//   lastName: 'billi',
//   sayHello (){
//     console.log("this is my "+Carbrands.brand +" car");
//   }
// }

// const Carbrands = {
//   brand:'tata',
//   maillage:'34rpm'
// }

// person.sayHello();

// const obj = new Object();
// obj.name="rohit";
// obj.rollNo= 20;
// obj.Fname = "jack";

// console.log(obj)
 
// var person = {
//   name : 'Rohit',
//   lastname:'saini',
//   get getData(){
//     return this.name.toUpperCase();
//   },
//   set setName(n){
//     this.name=n.toUpperCase();
//   }
// };

// person.setName = "Vijay_saini"
// console.log(person.getData)

// function Student (Fname,Lname,Ag,Cno){
//   this.firstName = Fname;
//   this.lastname = Lname;
//   this.Age = Ag;
//   this.contactNo = Cno;
// };

// const student1 = new Student("vijay","saini",21,9887496900);
// student1.country = 'india';
// console.log(student1);


// const Student = {
//   id:101,
//   email:'vj@12.com',
//   personalDetails:{
//     name:'jack',
//     phno:875438273,
//     address:{
//       country:'India',
//       state:'Rajasthan',
//       district:'sikar'
//     }
//   } 
// }

// console.log(Student.personalDetails.address);
// "use strict"
// var x=7;
// console.log(x)
// // const x ;

// const data = document.getElementById("l2");


// data.innerHTML = "coffee"

// console.log(data);

//document.getElementById("l2").innerHTML = "chye";
//const data = document.getElementsByClassName("l3");
//console.log(data.length)

// for(var i=0; i<data.length;i++){
//   data[i].innerHTML = "coldCoffee";
// }

// const data = document.getElementsByClassName("l3").innerHTML = "ghee";
// console.log(data)

// const div1 = document.querySelectorAll("h.into").innerHTML="ghar";
// //const data = div1.getElementsByTagName("p");
// console.log(div1)

//  for(var i=0; i<data.length;i++){
//     data[i].innerHTML = "Ghantaghar";
//  }

//document.getElementById("into").parentElement.innerHTML  = "helo";

// let data = document.getElementById("intro");
// let data1 = document.createElement('h1');
// let text =document.createTextNode("welcome to rajasthan");

// h1.append(text)

// data.appendChild(h1)


// var parent = document.getElementById("delets");
// //console.log(parent);

// var elm = parent.firstElementChild.nextSibling.nextSibling.nextSibling;
// console.log(elm);

// parent.removeChild(elm);


// var data = document.getElementById("delets");
// var cloneElm = data.cloneNode(true);
//  var op = document.body.appendChild(cloneElm);
// console.log(op)

// var data = document.getElementById("delets").cloneNode(true);
// document.body.appendChild(data);

// var data = document.getElementById("btn").hasAttribute("value");
// console.log(data);

//btn.style.backgroundColor = "red";
//btn.setAttribute('style','background-color:cyan;')

// var data = document.getElementById("btn");
// var op = getComputedStyle(btn);
// console.log(op.color)

// var data = document.getElementById.getComputedStyle("btn");

// console.log(data)

// var data = document.getElementById("use").offsetHeight;
// console.log(data)
// function clickMe(){
//    alert("welcome");
// }

// setInterval(fun1,2000);
// function fun1(){
//    document.write("alert")
// }
// var cf = document.getElementById("btn11").addEventListener('click',fun1);


// setInterval(() => {
//    console.log("hello")
// }, 1000);

// const data = function fun3(){
//    setInterval(() => {
//       console.log("hello")
//    }, 1000);
   
// }


//var cf = document.getElementById("btn11").addEventListener('click',fun3);
// const v1=setInterval(clear,2000);

// function clear(){
//    console.log("clear is work ");
// }

// var dc = document.getElementById("btn11");
// dc = addEventListener('click',function(){
//    this.clearInterval(v1);
// })

// console.log(window.location.href);
// console.log(window.location.pathname);
// console.log(window.location.protocol);

// function fun(){
//    location.reload();
// }

//location.href = 'https://www.google.com'

// 1	appName	returns the name
// 2	appVersion	returns the version
// 3	appCodeName	returns the code name
// 4	cookieEnabled	returns true if cookie is enabled otherwise false
// 5	userAgent	returns the user agent
// 6	language	returns the language. It is supported in Netscape and Firefox only.
// 7	userLanguage	returns the user language. It is supported in IE only.
// 8	plugins	returns the plugins. It is supported in Netscape and Firefox only.
// 9	systemLanguage	returns the system language. It is supported in IE only.
// 10	mimeTypes[]	returns the array of mime type. It is supported in Netscape and Firefox only.
// 11	platform	returns the platform e.g. Win32.
// 12	online	returns true if browser is online otherwise false.


// console.log(navigator.online);

// var textbox = document.getElementById("textbox");
// textbox.addEventListener('input',function(){
//     var val = this.value;
//     let cv = val.length;
    
//     document.getElementById("character").innerHTML = cv;

//     var wd = val.split(" ");
//     val = val.trim();
    

//     document.getElementById("word").innerHTML =wd.length;
// })

function chageBg(color){
    document.body.style.backgroundColor = color;
    txt = document.getElementsByClassName("text");
    if(color == '#000000'){
       for(let elm of txt){
        elm.style.color = "white";
       }
    }else{
        elm.style.color = "black";
    }
}