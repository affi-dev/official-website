const firebaseConfig = {
    apiKey: "AIzaSyBs6trp5oCqTj9Mn46t-i1_ClxwFnIQQ5o",
    authDomain: "contect-web.firebaseapp.com",
    databaseURL: "https://contect-web-default-rtdb.firebaseio.com",
    projectId: "contect-web",
    storageBucket: "contect-web.appspot.com",
    messagingSenderId: "954310860409",
    appId: "1:954310860409:web:f90f01c7a7710313b77ea8",
    measurementId: "G-VJW1G1EEG8"
  };
 
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("msg");
  
    saveMessages(name, email, msg);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email, msg) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: email,
      msgContent: msg,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };