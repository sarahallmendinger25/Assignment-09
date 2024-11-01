//Make empty array for form
const movies = []
document.getElementById("btnSubmit").onclick = function(){
    //Get the text from the text boxes
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let rating = document.getElementById("rating").value;
    let tablediv = document.getElementById("table");
    //Add the objects to the array
    let obj = {
        name: title,
        type: genre,
        stars: rating
    };
    movies.push(obj);
    //creating table
    //console.log(obj)
    //console.log(obj[0]);
   
        //const tbl = document.createElement("table");
        //const tblBody = document.createElement("tbody");
        
        // const variable = document.getElementById("tablediv")
        // var table = '<table><thead><tr><th>Movie Name</th><th>Movie Genre</th><th>Star Rating</th></tr></thead><tbody id = "test"></tbody></table>';
        // console.log(table)
        // variable.appendChild(table);

        
            const tbody = document.getElementById("test");
            const row = document.createElement("tr");
            
            //creating table data elements
            let tdname = document.createElement("td");
            let tdgenre = document.createElement("td");
            let tdstar = document.createElement("td");

            //fillerup
            tdname.innerHTML = obj.name;
            tdgenre.innerHTML = obj.type;
            tdstar.innerHTML = obj.stars;

            //append da child
            row.appendChild(tdname);
            row.appendChild(tdgenre);
            row.appendChild(tdstar);
            //console.log(row);

            tbody.appendChild(row);

             
            
        
        

  
//tablediv.appendChild(table);
    }
    

/* <table>
<tr>
<th>Movie Title</th>
<th>Genre</th> 

<th>Star Rating</th>
</tr>
<tr>
<td>obj0</td>
<td>obj1</td>
<td>obj2</td>
</tr>
</table> */
