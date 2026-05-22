let todo = [];

while(true)
{
    let Req = prompt("Enter your Request");
    if(Req == "quit")
    {
        console.log("app quit");
        break;
    }

    if(Req == "list")
    {
        let list;
        console.log("------------------")
        for(let i=0;i<todo.length;i++)
        {
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    }
    else if(Req=="add")
    {
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    }
    else if(Req == "delete")
    {
        let idx=prompt("enter the task you want to delete");
        todo.splice(idx, 1);
        console.log("detele the task");
    }
}