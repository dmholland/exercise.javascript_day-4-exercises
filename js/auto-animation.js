const buttons = document.querySelectorAll("button");
var animate;
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    buttons[i].addEventListener('click',function(){
        var direction = event.target.id;
        animate = setInterval(function() { moveImage(direction);},60);
       
    });
    animate =setTimeout(clearInterval(animate),30);
    document.addEventListener('mouseup',function() {clearInterval(animate);});
}
    

function changeToCoral(eventTarget) {
    eventTarget.style.backgroundColor = "coral";
}

function changeToWhite() {
    eventTarget.style.backgroundColor = "white";
}

function backToNormal(eventTarget) {
    eventTarget.style.backgroundColor='';
}

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    let imgObjStyleDirection;

    if(direction === 'KeyD') {        
        imgObjStyleDirection = imgObjStyle.left;
        imgObjStyle.left = parseInt(imgObjStyleDirection) + 10 + 'px';
    }

    if(direction === 'KeyA') {
        imgObjStyleDirection = imgObjStyle.left;
        imgObjStyle.left = parseInt(imgObjStyleDirection) - 10 + 'px';
    }

    if(direction === 'KeyW') {
        imgObjStyleDirection = imgObjStyle.top;
        imgObjStyle.top = parseInt(imgObjStyleDirection) - 10 + 'px';
    }

    
    if(direction === 'KeyS') {
        imgObjStyleDirection = imgObjStyle.top;
        imgObjStyle.top = parseInt(imgObjStyleDirection) + 10 + 'px';
    }
}



function init(){
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px'; imgObj.style.top = '0px';};




    window.onload = init;
