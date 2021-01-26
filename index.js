const input=document.getElementById('text');
const form = document.getElementById('form');
const append=document.querySelector('.append');


getfromLS();
form.addEventListener('submit',(e)=>{
    e.preventDefault();

})
var fre=1;
function addtodos(text,index)
{
   var inputtext= input.value;
//    console.log(text);
    //   console.log(fre++);
   if(text)
   {
       inputtext=text.text;
   }
   if(text)
   {
       fre=index+1;
   }
   else{
       fre++;
   }
   const count = document.createElement('span');
   count.setAttribute('class','count');
  console.log(fre);
//    count.innerText=`  ${fre}`;

    const li= document.createElement('li');
    li.setAttribute('class','content');
    li.innerHTML=inputtext;
    append.insertAdjacentElement('afterbegin',li);
    // append.insertAdjacentElement('beforeend',count)
    li.appendChild(count);
    input.value='';
    if( text && text.completed)
       {
           li.classList.add('completed');
       }
    li.addEventListener('click',()=>{
        li.classList.toggle('completed');
        updateLs();
    })
    li.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        console.log("raushan kumar");
        li.remove();
        updateLs();
    })
}


input.addEventListener('change',()=>{
    addtodos();
   updateLs();
})
function updateLs()
{
    const all =document.querySelectorAll('li');
    const store=[];
    all.forEach((element,index)=>{
       
        store.push({
            text:element.innerText,
            completed: element.classList.contains('completed')
        });
    })
    console.log(store);
    localStorage.setItem("todos",JSON.stringify(store));
}

function getfromLS()
{
    const alls= localStorage.getItem('todos');
    const allvalue= JSON.parse(alls);
    // console.log(allvalue);
    allvalue.forEach((element,index)=>{
        // console.log(element);
        addtodos(element,index);
    })
}
// getfromLS();
