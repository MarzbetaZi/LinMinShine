let sizing =[];
let permis =3;
let no=0;
let dataCaller=document.getElementsByClassName("fetch");
let order =document.getElementsByClassName("number");
let more ="<button class='fetch'onclick='call()'>more</button>";
let data =document.getElementsByClassName("data");
let search =document.getElementById("search");
let id =document.getElementById("dataFrame");
let txt=document.getElementsByClassName("desc");
  window.onload =function(){
    var searchBox=document.getElementById("DataSearch");
      loadPost();
  }
  function loadPost(){
      permis+=1;
      for (var i = 0; i <permis; i++) {
          sizing[i] =postDATA[i];
      }
      let loading =sizing.map(function(c){
          return "<div class='pa'>"+"<div class='partA'>"+"<span class='number'></span>"+"<p id='title'>"+c.title+"</p>"+"<p class='desc'>"+c.descrip+"</p>"+"</div>"+"<embed src='"+c.photo+"'class='data'/>"+"</div><hr/>"+more;
      });
      id.innerHTML=loading.join("");
      setTimeout(function() {
          for (var i = 1; i <sizing.length; i++) {
         dataCaller[i-1].style.display="none";
      }
      }, 10);
     for (var o = 0; o <order.length; o++) {
         order[o].innerText=o+1;
         txt[o].onclick=function(){
           alert(this.innerText);
         }
     }
     for (var i = 0; i <data.length; i++) {
         data[i].onclick =function(){
             localStorage.setItem("carryer",this.src);
             open("support.html");
         }
         txt[i].onclick=function(){
            android.ToastShower(this.innerText);
         }
     }
  }
  function call(){
      permis +=1;
      loadPost();
     
  }
   function find(){
       open("search.html")
   }