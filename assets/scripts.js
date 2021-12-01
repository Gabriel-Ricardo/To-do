let taskList = [
    {task: "blabla", done: true},
    {task: "zaza", done: false},
    {task: "zeze", done: true},
    {task: "zizi", done: false},
    {task: "zozo", done: false},
    {task: "zuzu", done: false}
];

function createCell(content,className = '')
{
    var td = document.createElement('td');
    if(className.length > 0){ td.className = "text-center"; }
    td.append(content);
    return td;
}

function renderTodoTable()
{
    let tbody = document.querySelector("#table-todos tbody");
    const table_container = document.querySelector("#table-container");

    if(taskList.length == 0)
    {
        table_container.innerHTML = "No tasks.";
        return false;
    }

    let table = document.createElement("table");
    let table_tr = document.createElement("tr");

    table.append(table_tr);
    table_container.append(table);

    for(var i = 0; i < taskList.length; i++)
    {   
        var tr = document.createElement('tr');
        //if(taskList[i].done == true){ tr.className = 'done'; }
        var td1 = createCell(i,'text-center');
        //td1.className = "done";
        var td2 = createCell(taskList[i].task);

        var status = taskList[i].done ? 'Yes' : 'No';
        var td3 = createCell(status, 'text-center');
        var btn = document.createElement('button');
        btn.className = "btn btn-danger btn-sm";
        btn.innerHTML = "delete";
        var td4 = createCell(btn, 'text-center');
        
        if(taskList[i].done){ tr.className = "done"; }

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);

        tbody.append(tr);
    }
}

renderTodoTable();