const canvas = document.getElementById("canvas");

// إضافة جذع
document.getElementById("addTrunk").onclick = () => {
    addItem("🌳", "trunk");
};

// إضافة فرع
document.getElementById("addBranch").onclick = () => {
    addItem("🌿", "branch");
};

// إضافة ورقة
document.getElementById("addLeaf").onclick = () => {
    addItem("🍃", "leaf");
};

// إضافة نص
document.getElementById("addText").onclick = () => {

    const text = prompt("اكتب الاسم");

    if(text){

        const div = document.createElement("div");

        div.className = "item text-item";

        div.innerText = text;

        div.style.left = "250px";
        div.style.top = "150px";

        makeDraggable(div);

        canvas.appendChild(div);

    }

};

// حذف الكل
document.getElementById("clearCanvas").onclick = () => {
    canvas.innerHTML = "";
};


// إنشاء عنصر جديد
function addItem(icon,type){

    const div = document.createElement("div");

    div.className="item "+type;

    div.innerHTML=icon;

    div.style.fontSize="70px";

    div.style.left="200px";

    div.style.top="150px";

    makeDraggable(div);

    canvas.appendChild(div);

}



// السحب والإفلات
function makeDraggable(element){

    let isDown=false;

    let offsetX,offsetY;

    element.onmousedown=function(e){

        isDown=true;

        offsetX=e.offsetX;

        offsetY=e.offsetY;

    };

    document.onmouseup=function(){

        isDown=false;

    };

    document.onmousemove=function(e){

        if(!isDown) return;

        const rect=canvas.getBoundingClientRect();

        element.style.left=(e.clientX-rect.left-offsetX)+"px";

        element.style.top=(e.clientY-rect.top-offsetY)+"px";

    };

}
