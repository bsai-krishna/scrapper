
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCNqlROeyuy5PVlz9wd864gIWr-MnPCcxo",
    authDomain: "infinity-scrap-collectors-form.firebaseapp.com",
    databaseURL: "https://infinity-scrap-collectors-form.firebaseio.com",
    projectId: "infinity-scrap-collectors-form",
    storageBucket: "infinity-scrap-collectors-form.appspot.com",
    messagingSenderId: "208908723675",
    appId: "1:208908723675:web:7cd48fd545e3a9ffa733fe",
    measurementId: "G-ZH999252RW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// Referencing Messages Collection
var messagesRef = firebase.database().ref('messages');


// Listen for Form Submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var date = getInputVal('date');
    var category = getInputVal('category');
    var weight = getInputVal('weight');
    var address = getInputVal('address');
    var message = getInputVal('message');

    //Save message
    saveMessage(name, date, category,weight, address, message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    //Clearing the Form
    document.getElementById('contactForm').reset();
}


// Function to get Form values
function getInputVal(id){
    return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(name,date, category, weight, address, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        //company: company,
        date: date,
        category: category,
        weight:weight,
        address:address,
        message: message
    });
}