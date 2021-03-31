var name_array=["Cheese Pizza","Veg Pizza","Pineapple Pizza"];
function menu(){
    var name1=document.getElementById("student1").value;
    name_array.push(name1);
    console.log(name_array);
    name_array.sort();
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
}