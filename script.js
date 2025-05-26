//DOM Manipulation resource https://websitehurdles.com/get-html-form-values-javascript/

// Get the form element
const contactForm = document.getElementById('contactForm');                    

// Add a form submit event listener
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Serialize form data into a JSON object
    const formData = {};
    new FormData(contactForm).forEach((value, key) => {
        formData[key] = value;
    });

    // Access and log the values
    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const email = formData.email;
    const phoneNumber = formData.phoneNumber;
    const city = formData.city;
    const state = formData.state;
    const zipCode = formData.zipCode;

    document.getElementById("previewFirstName").innerHTML = firstName;
    document.getElementById("previewLastName").innerHTML = lastName;
    document.getElementById("previewEmail").innerHTML = email;
    document.getElementById("previewPhoneNumber").innerHTML = phoneNumber;
    document.getElementById("previewCity").innerHTML = city;
    document.getElementById("previewState").innerHTML = state;
    document.getElementById("previewZipCode").innerHTML = zipCode;
   
});



//Local storage
function saveData(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipCode = document.getElementById("zipCode").value;


    
    var userFirstName = localStorage.setItem('firstName', firstName);//using key value pairs to store data locally
    var userLastName = localStorage.setItem('lastName', lastName);

}


const workHistoryForm = document.getElementById('workHistoryForm');                    

// Add a form submit event listener
workHistoryForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Serialize form data into a JSON object
    const formData = {};
    new FormData(workHistoryForm).forEach((value, key) => {
        formData[key] = value;
    });

    // Access and log the values
    const jobTitle = formData.jobTitle;
    const employerName = formData.employerName;
    const startDate = formData.startDate;
    const endDate = formData.endDate;
    const workCity = formData.workCity;
    const workState = formData.workState;

    document.getElementById("previewJobTitle").innerHTML = jobTitle;
    document.getElementById("previewEmployerName").innerHTML = employerName;
    document.getElementById("previewStartDate").innerHTML = startDate;
    document.getElementById("previewEndDate").innerHTML = endDate;
    document.getElementById("previewWorkCity").innerHTML = workCity;
    document.getElementById("previewWorkState").innerHTML = workState;

   
});



// var uid = document.getElementById("firstName")
// LocalStorage.setItem("resumeData", JSON.stringify(formData));
