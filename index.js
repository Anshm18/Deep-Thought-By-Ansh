const arrow = document.querySelector('.arrow');
const container = document.querySelector('.side');
const boxHead = document.querySelector('.boxHeading');
const boxPara = document.querySelector('.boxPara');
const main = document.querySelector('.asset');
const contain = document.querySelector('.asset-container');
document.addEventListener('DOMContentLoaded',()=>{
    
    fetch('./data.json').then(response => response.json())
    .then(data=>{
        boxHead.innerText = data.tasks[0].task_title;
        boxPara.innerText = data.tasks[0].task_description;
    
        for(let i=data.tasks[0].assets.length-1; i>=0; i--){
            const header = document.querySelector('.cardHead');
            const description = document.querySelector('.Para');
            header.innerText = data.tasks[0].assets[i].asset_title;
            description.innerText = data.tasks[0].assets[i].asset_description;
            document.querySelector('iframe').setAttribute('src',data.tasks[0].assets[i].asset_content); 
            if(i >= 1){
                const clone = main.cloneNode(true);
                contain.appendChild(clone);
            }
        }
    }).catch((err)=>{
        console.log(err);
    })
})



arrow.addEventListener('click', () => {
    arrow.classList.toggle('fa-arrow-right');
    arrow.classList.toggle('fa-arrow-left');
    container.classList.toggle('sideAnim');
    container.classList.toggle('btn');
})


