console.log('It works!');
// let para = document.createElement('p');
// para.textContent = 'We hope you enjoyed the ride.';

// let parent = document.querySelector('div');
// parent.appendChild(para);
// parent.removeChild(para);



// function alertMethod() {
    //     alert("Hello Alert Box");
    // }
    
    
    // const confirmMethod = () => {
//     let conf = confirm("Are u sure?");
//     if (conf == true) {
    //     alert("ok");
    //     } else {
        //     alert("cancel");
        //     }
        // }
        
// const promptMethod = () => {
//     let name = prompt("Who are you?");
//     if (conf == true) {
    //         alert("I am " + name);
    //     }
    // }
    
// const promptMethod = () => {
    //     open("https://www.google.com")
    // }
    

// const myList = document.getElementById('myList');
// const node = document.createElement('li');
// node.textContent = 'Next.JS';

// myList.appendChild(node);
    
    
// const node = document.getElementById("myList2").lastElementChild;   
// document.getElementById("myList1").appendChild(node);

// const list = document.querySelector("#myList");
// list.firstElementChild.textContent = 'Typescript'; 

// const newDiv = document.querySelector('div');
// newDiv.className += 'hightlight';
// newDiv.className += ' hightlight2';

// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent"); 
// const child = document.getElementById("child") 
// // bubbling 
// grandparent.addEventListener("click", ()=> { console.log("Grandparent clicked"); }, false) 
// // capturing or trickling 
// parent.addEventListener("click", (e)=> { 
//     console.log("Parent clicked"); 
//     e.stopPropagation();
// }) 
// // bubbling 
// child.addEventListener("click", ()=> { console.log("Child clicked"); }, false)

// const redDiv = document.querySelector('#red');
// const greenDiv = document.querySelector('#green');
// const skyblueDiv = document.querySelector('#skyblue');
// const blueDiv = document.querySelector('#blue');
// const purpleDiv = document.querySelector('#purple');
// const goldDiv = document.querySelector('#gold');
 
// // Event Bubbling Phase 
// redDiv.addEventListener('click', () => {
//     console.log('Red box clicked.');
// }, false)
// greenDiv.addEventListener('click', () => {
//     console.log('Green box clicked');
// }, false)
// skyblueDiv.addEventListener('click', (e) => {
    
//     console.log('Skyblue box clicked');
// }, false)
 
// // Event Capturing Phase
// blueDiv.addEventListener('click', () => {
//     console.log('Blue box clicked.');
// }, true)
// purpleDiv.addEventListener('click', () => {
//     console.log('Purple box clicked');
// }, true)
// goldDiv.addEventListener('click', () => {
//     console.log('Golden box clicked');
// }, true)