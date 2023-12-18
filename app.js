


const condition=document.getElementById('condition')
const functions=document.getElementById('functions')
const window1=document.getElementById('window1')
const window2=document.getElementById('window2')
const window3=document.getElementById('window3')
const homework1=document.getElementById('homework1')
const function1 = document.getElementById('function1');
const condition1 = document.getElementById('condition1');




//////// HOMEEWORK 1

       const h1 = document.createElement('h4')         
       const h1text = document.createTextNode('Homework 1 - Modal')       

       const btn = document.createElement('button')     
       btn.setAttribute('id', 'mybtn')    
       const btntext = document.createTextNode('button')         



      const modal = document.createElement ( 'div')
      modal.setAttribute('id','mymodal') 
      modal.classList.add ('modal')



    const modalcont = document.createElement('div')
    modalcont.classList.add ('modal-cont')
    
    const span = document.createElement ('span')
    span.classList.add('close');
    span.innerHTML = '&times';


    const p = document.createElement('p')
    const ptext = document.createTextNode('click x for close modal')
    p.classList.add('par')


         h1.append(h1text)
        btn.append(btntext)
        p.append (ptext)
        modalcont.append(span,p)
        modal.append(modalcont)
       window1.append(h1,btn,modal)





btn.addEventListener ( 'click', () => {
    modal.style.display = 'block';

})


span.addEventListener('click',() => {
    modal.style.display = 'none';
})










homework1.addEventListener('click', function() {
    
    
    gsap.from('.condition ', {duration:1, x: '30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
    gsap.from('.functions ', {duration:1, x: '-30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})


  
    condition.style.display = 'block';
    functions.style.display = 'block';
    window1.style.display = 'block';
    window2.style.display = 'none';
    window3.style.display = 'none';

    
    function1.style.display = 'block';
    function2.style.display = 'none';
    function3.style.display = 'none';
    
    condition1.style.display = 'block';
    condition2.style.display = 'none';
    condition3.style.display = 'none';
    
  
    
});    





// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

const homework2=document.getElementById('homework2')
const function2 = document.getElementById('function2');


const formcolor = document.querySelector (".formcolor") 

formcolor.addEventListener( "submit" , (e) => {
e.preventDefault ()

const colorchanger = document.querySelector('input[name= "colorchanger"]')

if (!colorchanger.value) {   
    alert ('Please select a color')
    colorchanger.value = ''
}

const numericValue = parseInt(colorchanger.value, 10);
if (colorchanger.value == numericValue) {
    alert ('numbers cannot be entered')
    colorchanger.value = ''
 }

    const window2 = document.querySelector("#window2");

if (colorchanger.value === "red" ) {
    window2.style.backgroundColor = "red"
    colorchanger.value = ''
}else if (colorchanger.value === "green") {
    window2.style.backgroundColor = "green";
    colorchanger.value = ''
}
 else if (colorchanger.value === "blue") {
    window2.style.backgroundColor = "blue";
    colorchanger.value = ''
}
 else if (colorchanger.value === "black") {
    window2.style.backgroundColor = "black";
    colorchanger.value = ''
}
 else if (colorchanger.value === "white") {
    window2.style.backgroundColor = "white";
    colorchanger.value = ''
} 

else {alert ('please select a colors: red, blue, green, black, white')}


} )




// //HOMEEWORK 2



homework2.addEventListener('click', function() {   
    
    gsap.from('.condition ', {duration:1, x: '30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
    gsap.from('.functions ', {duration:1, x: '-30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})

 condition.style.display = 'block';
    functions.style.display = 'block';
    window2.style.display = 'flex';
    window1.style.display = 'none';
    window3.style.display = 'none';


    function1.style.display = 'none';
    function2.style.display = 'block';
    function3.style.display = 'none';
    
    
    condition1.style.display = 'none';
    condition2.style.display = 'block';
    condition3.style.display = 'none';
    
    

});



// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

//                                                    



const homework3=document.getElementById('homework3')
const function3 = document.getElementById('function3');
const container = document.getElementById('container')
const cont = document.getElementById('cont')





const formAvarage = document.querySelector('.formAvarage');
docsum = document.querySelector ('#sum')
docavarage = document.querySelector ('#avarage')


formAvarage.addEventListener('submit', (e) => {
    e.preventDefault();

    const numbers = document.querySelector('input[name="numbers"]');
    const numbersn = numbers.value.trim(); 

    
        const numbersArray = numbersn.split(':');


        let sum = 0;

        for (let i = 0; i < numbersArray.length; i++) {
            sum += parseInt(numbersArray[i], 10);
            
        }

        const average = sum / numbersArray.length;
        docsum.innerText = 'Sum :' + sum;
        docavarage.innerText ='Avarage:' + average;


      
        if (!numbersn) {
            alert('Please enter the numbers');
            numbers.value = ''; 
            return;
        }
    
        const numericValue = parseInt(numbersArray[0], 10);
        if (isNaN(numericValue)) {
            alert('Please enter numbers, not strings.');
            numbers.value = ''; 
            return;
        }

});








             //HOMEEWORK 3


homework3.addEventListener('click', function() {



   
    gsap.from('.condition ', {duration:1, x: '30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
    gsap.from('.functions ', {duration:1, x: '-30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})


 
    condition.style.display = 'block';
    functions.style.display = 'block';
    window2.style.display = 'none';
    window1.style.display = 'none';
    window3.style.display = 'flex';


    function1.style.display = 'none';
    function2.style.display = 'none';
    function3.style.display = 'block';
    
    
    condition1.style.display = 'none';
    condition2.style.display = 'none';
    condition3.style.display = 'block';
    

});

//////////////////////////////////////////////////




// ///////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////


















