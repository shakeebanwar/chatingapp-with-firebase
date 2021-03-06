// Social Auth with Facebook
function Facebooklogin(){

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
         //store user name

        console.log(user.email)
        sessionStorage.setItem("user",user.email);
        sessionStorage.setItem("name",user.displayName);
        window.location.href = "chat.html"
        // ...
      }).catch(function(error) {
        
        var errorMessage = error.message;
        console.log(errorMessage)
      
      });



}


function GoogleLogin(){


  
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    sessionStorage.setItem("user",user.email);
    sessionStorage.setItem("name",user.displayName);
    window.location.href = "chat.html"
   
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
  



  
}