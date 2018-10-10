window.onload = function() {
    
    var ulId = document.getElementById("ul-class");
    var btnAdd = document.getElementById("btn-add");
    var formId = document.getElementById("form_id");
    var classTagLi;
    var checkbox;
    var btnUpdClass;
    var btnRemClass;
    var isUpdLi = false;
    var currentLi;
    
    btnAdd.onclick = function(e) {
        if(!formId.value == "") {
            if(isUpdLi) {
                currentLi.innerText = formId.value;
                isUpdLi = false;
                formId.value = "";
            }
        
            else {
                var new_li = document.createElement("li");
        
                var new_form = document.createElement("form");
                var new_input = document.createElement("input");
                new_input.setAttribute("class", "checkboxInput");
                new_input.setAttribute("type", "checkbox");
                new_form.appendChild(new_input);
        
                var new_p = document.createElement("p");
                var text_form = document.createTextNode(formId.value);
                new_p.appendChild(text_form);
        
                var divForBtn = document.createElement("div");
                divForBtn.classList.add("divForBtnClass");
                var new_btn_upd = document.createElement("button");
                new_btn_upd.classList.add("btn-upd");
                var text_upd = document.createTextNode("upd");
                new_btn_upd.appendChild(text_upd);
                divForBtn.appendChild(new_btn_upd);
        
                var new_btn_rem = document.createElement("button");
                new_btn_rem.classList.add("btn-rem");
                var text_rem = document.createTextNode("rem");
                new_btn_rem.appendChild(text_rem);
                divForBtn.appendChild(new_btn_rem);
        
                new_li.appendChild(new_form);
                new_li.appendChild(new_p);
                new_li.appendChild(divForBtn);
        
                ulId.appendChild(new_li);
                formId.value = "";
        
                classTagLi = document.getElementsByTagName("li");
                checkbox = document.getElementsByClassName("checkboxInput");
                btnUpdClass = document.getElementsByClassName("btn-upd");
                btnRemClass = document.getElementsByClassName("btn-rem");
        
                if(btnUpdClass !== undefined && btnUpdClass.length > 0) {
                    for(var i=0; i<btnUpdClass.length; i++) {
                        checkbox[i].onclick = checkboxClick;
                        btnUpdClass[i].onclick = updLi;
                        btnRemClass[i].onclick = remLi;
                    }
                }
            }
        }
        
        e.preventDefault();
    }
    
    function updLi(e) {
        formId.value = e.target.parentNode.previousSibling.textContent;
        isUpdLi = true;
        currentLi = e.target.parentNode.previousSibling;
    }
        
    function remLi(e) {
        e.target.parentNode.parentNode.remove();
    }
    
    function checkboxClick(e) {
        if(e.target.checked) {
            if(e.target.parentNode.nextSibling.classList.contains("text-none-decoration")) {
                e.target.parentNode.nextSibling.classList.remove("text-none-decoration");    
            }
            e.target.parentNode.nextSibling.classList.add("text-decoration");
        }
        else {
            if(e.target.parentNode.nextSibling.classList.contains("text-decoration")) {
                e.target.parentNode.nextSibling.classList.remove("text-decoration");    
            }
            e.target.parentNode.nextSibling.classList.add("text-none-decoration");            
        }
    }
}