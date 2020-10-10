// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBXBK1SimNqLU0tALA8tL-_5K5FWHjD3nM",
    authDomain: "infinity-login-36ed3.firebaseapp.com",
    databaseURL: "https://infinity-login-36ed3.firebaseio.com",
    projectId: "infinity-login-36ed3",
    storageBucket: "infinity-login-36ed3.appspot.com",
    messagingSenderId: "190895419582",
    appId: "1:190895419582:web:19aeb415986af1d6d0aeef",
    measurementId: "G-VXKPYKX55Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  /*function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUsersWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Signed Up");
  }*/

  function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
   }
   
   
   
   function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    
    
    
   }
   
   
   function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    //window.location = 'index.html';
    
   }
   
   
   
   auth.onAuthStateChanged(function(user){
    
    if(user){
     
     var email = user.email;
     alert("Active User " + email);
     
     //Take user to a different or home page
     window.location = 'Menu/index.html';
     //is signed in
     
    }
    // else{
     
    //  //alert("No Active User");
    //  document.getElementById('formContainer').reset();
    //  //no user is signed in
    // }
    
    
   });

   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//   $(document).ready(function () {
//     $(".popup").hide();
//     $(".openpop").click(function (e) {
//         e.preventDefault();
//         $("iframe").attr("src", $(this).attr('href'));
//         $(".links").fadeOut('slow');
//         $(".popup").fadeIn('slow');
//     });

//     $(".close").click(function () {
//         $(this).parent().fadeOut("slow");
//         $(".links").fadeIn("slow");
//     });
// });

// var content = document.getElementById("content");
//     var biography = "<p> Text here </p> "  
//     ;

    // function displayBiography() {
    //     "use strict";
    //     content.innerHTML = biography;
    //     var iframe = document.getElementById('pdf');
    //     iframe.style.display = 'none';
    // }

    // function toShow() {
    //   var iframe = document.getElementById('showDiv');
    //   iframe.style.display = 'block';
    // }

    
function DoViewIFRAME(tid1,tid2,tid3) {
document.getElementById(tid1).style.display = "none";
document.getElementById(tid2).style.display = "";
document.getElementById(tid3).style.display = "";
}
function DoHideIFRAME(tid1,tid2,tid3) {
document.getElementById(tid1).style.display = "none";
document.getElementById(tid2).style.display = "none";
document.getElementById(tid3).style.display = "";
}


