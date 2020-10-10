// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBLzwHHd4D-s8-NPyMF4sMarbt5g61fIDs",
    authDomain: "infinity-customersform.firebaseapp.com",
    databaseURL: "https://infinity-customersform.firebaseio.com",
    projectId: "infinity-customersform",
    storageBucket: "infinity-customersform.appspot.com",
    messagingSenderId: "1070006680220",
    appId: "1:1070006680220:web:f70f54ab549f3701df4b59",
    measurementId: "G-ZE3GR71JHH"
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
    var time = getInputVal('time');
    var category = getInputVal('category');
    var weight = getInputVal('weight');
    var address = getInputVal('address');
    var message = getInputVal('message');

    //Save message
    saveMessage(name, time, category,weight, address, message);

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
function saveMessage(name,time, category, weight, address, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        //company: company,
        time: time,
        category: category,
        weight:weight,
        address:address,
        message: message
    });
}