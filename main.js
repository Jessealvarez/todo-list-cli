const prompt = require('prompt-sync')({sigint: true});

let todos = [];
const iscomplete = [];

    
console.log("Input [1] to open to-do list or [2] to mark items as completed.")

    let decisionx = Number(prompt(">"));

    while (decisionx === 1 ) {
            for (let i=0; i < todos.length; i++){ 
                console.log("Number: " + i + " " + iscomplete[i] + " " + todos[i]) //print to-do list item
            }
        console.log("Input [1] to add items to your list and [2] to check items off:")
        let choicex = Number(prompt(">"))
                if (choicex === 1){
                    let itemx = String(prompt("Add item to your to-do list: "))
                    todos.push(itemx)
                    iscomplete.push("incomplete")
                }
                if (choicex === 2){
                    console.log("You have: " +todos.length + " to-dos left.")
                    
                    console.log("Input number of item to mark as completed")
                    iscomplete.unshift("complete")
                    let checkoff = Number(prompt(">"))
                    let n = checkoff
                    
                        console.log("Number: " + checkoff + " " + iscomplete[0] + " " + todos[n])

                       
                        }


            }


       

    

