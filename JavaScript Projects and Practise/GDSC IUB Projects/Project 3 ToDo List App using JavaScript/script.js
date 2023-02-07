function AddTodo(){
    let TodoInput = document.getElementById('searchBar').value;
    let TodoList = document.getElementById('TodoList');

    if(TodoInput=="" || TodoInput==" "){
        alert("Blank Todo List not allowed, please add some value.....")
    }
    else{
        let ListDiv = document.createElement('div');
        ListDiv.setAttribute("class", "SingleTodo");

        let checkboxInput = document.createElement("input");
        checkboxInput.setAttribute("class", "checkboxClass");
        checkboxInput.type = 'checkbox';

        checkboxInput.onclick = function(e){
            e.target.nextElementSibling.style.textDecoration = 'line-through';
        }

        let pText = document.createElement("p");
        pText.setAttribute("class", "pClass")
        pText.appendChild(document.createTextNode(TodoInput));

        let DelBtn = document.createElement('button');
        DelBtn.setAttribute("class", "DeleteBtnClass")
        DelBtn.appendChild(document.createTextNode('Delete'));
        DelBtn.onclick = function (e) {

            let a = e.target.parentElement;
            TodoList.removeChild(a);
            alert("The Task will be deleletd Permanently, click OK to continue")

        }

        ListDiv.appendChild(checkboxInput);
        ListDiv.appendChild(pText);
        ListDiv.appendChild(DelBtn);

        // Add Main Div to our TodoList Section Reversly
        TodoList.insertBefore(ListDiv, TodoList.childNodes[0]);

        // Empty the Input Field
        document.getElementById('searchBar').value = '';
    }
}