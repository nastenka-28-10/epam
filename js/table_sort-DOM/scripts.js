let sortById = function(){
    let table = document.getElementById('table-sort');
    let tbody = table.firstElementChild
    
    let compare = function(rowA, rowB){
        return rowA.children[0].innerHTML > rowB.children[0].innerHTML;
    }
   
    let rows = [...tbody.children].sort(compare);
    rows.pop();
    
    rows.forEach((x)=>console.log(`${x.children[0].innerHTML} ${x.children[1].innerHTML} ${x.children[2].innerHTML}`))

    table.removeChild(tbody);
    
    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
    
    table.appendChild(tbody);
}

let elements = document.getElementsByTagName('button');
let parentNode = elements[0].parentNode;
console.log(parentNode);
parentNode.addEventListener('click', sortById);