
getdata ();
var form = document.getElementById('send-container');
var messageContainer = document.querySelector('.container');
let containerdivRef = document.getElementById("messagesDiv");
// containerdivRef.scrollIntoView(false)

function getdata(){

    var query = firebase.database().ref('chat').on("child_added",function(snapshot){
      
    var data = snapshot.child("name").val();
    var key  = snapshot.child("key").val();
    var name  = snapshot.child("user").val();
    var displayname = snapshot.child("displayname").val();
    let usernameSession = sessionStorage.getItem('user');

    console.log('-------')
    console.log(name)
    console.log(usernameSession)

    if (name == usernameSession){

        AppendSendRecieveMessage(data,'right',displayname)

        console.log(true)


    }
    
    else{
        AppendSendRecieveMessage(data,'left',displayname)
        console.log(false)

    }
   
}

)}

form.addEventListener('submit',(e)=>{

    

    e.preventDefault()

    var Messagetitle = document.getElementById('messageInp').value;
    var key = firebase.database().ref('chat').push().key
    let usernameSession = sessionStorage.getItem('user');
    let displayname = sessionStorage.getItem('name');

    var TodoObject = {
        name : Messagetitle,
        key : key,
        user : usernameSession,
        displayname : displayname
        


    }

    firebase.database().ref('chat/' + key).set(TodoObject);
    document.getElementById('messageInp').value = "" ;
})





function AppendSendRecieveMessage(message,possition,UserName){

    

    var newdiv = document.createElement('div');
    let usernameSession = sessionStorage.getItem('user');
    newdiv.innerText = UserName + " : " +  message;
    newdiv.classList.add('message');
    newdiv.classList.add(possition);
    messageContainer.append(newdiv);
    containerdivRef.scrollTop = containerdivRef.scrollHeight;

   
}






