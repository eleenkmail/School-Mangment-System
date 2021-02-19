let students =[];
document.getElementById('submit').addEventListener('click', ()=>{
    let StudentName=document.getElementById('name').value;
    let StudentId=document.getElementById('idNumber').value;
    let StudentGpa=document.getElementById('gpa').value;
   
    if(validInput(StudentName,StudentId,StudentGpa)){
        alert('fail');
    }
    else{
        ADD(StudentName,StudentId,StudentGpa);
       insertStudent(StudentName,StudentId,StudentGpa);
    }


});




function validInput(name,id,gpa){
if(name==''||id==''||gpa==''){
return true;}
else false;
}
//add 
function ADD(name,id,gpa){
   
    var div=document.createElement('div');
    div.innerHTML=name+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+id+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+gpa;
    document.getElementById('AddArea').appendChild(div);}


//show 
document.getElementById('show').addEventListener('click', ()=>{
   
        for(var i=0;i<students.length;i++){
            var div=document.createElement('div');
            div.className='b';
    div.innerHTML=students[i].name+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+students[i].id+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+students[i].gpa;
    document.getElementById('ShowArea').appendChild(div);
        }
    });
//clear
    document.getElementById('cleaar').addEventListener('click',(e)=>{
        var div2 =document.getElementsByClassName('b');
        if(students.length>0){
        for(var i=students.length-1;i>=0;i--)
        div2[i].remove();}
    });
//delete
    document.getElementById('delete').addEventListener('click', ()=>{
        var idd=document.getElementById('deleted').value;
        for(var i=0;i<students.length;i++){
          if(students[i].id==idd){
            students.splice(i,1);
            break;
          }
    
        }
    });

    //update
document.getElementById('update').addEventListener('click', ()=>{
var Nname=document.getElementById('Newname').value;
var Nid=document.getElementById('NidNumber').value;
var Ngpa=document.getElementById('Newgpa').value;
var x=document.getElementById('name').value;
var y=document.getElementById('gpa').value;

for(var i=0;i<students.length;i++){
    if(students[i].id==Nid){
        if(Nname!==null){
            students[i].name=Nname;
        }
        if(Nname===null){
            students[i].name=x;

    }
        if(Ngpa!==null){
            students[i].gpa=Ngpa;
        }
        
            students[i].gpa=y;
            if(Ngpa===null){
                students[i].gpa=y;

        }
        break;
    }
}

});
//insert  
   function insertStudent(name, id, gpa) {
        let student = {
            name: name,
            id: id,
            gpa: gpa,
        };
        students.push(student);
        console.log('students array: ',students);
        
    console.log(students.length);
    }