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

    // Access the values
    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const email = formData.email;
    const phoneNumber = formData.phoneNumber;
    const city = formData.city;
    const state = formData.state;
    const zipCode = formData.zipCode;


    //Pass values to HTML element
    document.getElementById("previewFirstName").innerHTML = firstName;
    document.getElementById("previewLastName").innerHTML = lastName;
    document.getElementById("previewEmail").innerHTML = email;
    document.getElementById("previewPhoneNumber").innerHTML = phoneNumber;
    document.getElementById("previewCity").innerHTML = city;
    document.getElementById("previewState").innerHTML = state;
    document.getElementById("previewZipCode").innerHTML = zipCode;
   
});



//Local storage
function saveContactData(){
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


// //Local storage
// function saveWorkData(){
//     const jobTitle = document.getElementById("jobTitle").value;
//     const employerName = document.getElementById("employerName").value;
//     const startDate = document.getElementById("startDate").value;
//     const endDate = document.getElementById("endDate").value;
//     const workCity = document.getElementById("workCity").value;
//     const workState = document.getElementById("workState").value;
//     const zipCode = document.getElementById("zipCode").value;


    
//     var userFirstName = localStorage.setItem('firstName', firstName);//using key value pairs to store data locally
//     var userLastName = localStorage.setItem('lastName', lastName);

// }



// var uid = document.getElementById("firstName")
// LocalStorage.setItem("resumeData", JSON.stringify(formData));


function generatePDF() {
    // Choose the element to convert
const element = document.getElementById('resume-content');

// Optional configuration
const opt = {
margin: 1,
filename: 'myfile.pdf',
image: { type: 'jpeg', quality: 0.98 },
html2canvas: { scale: 2 },
jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};

// Generate the PDF
html2pdf().set(opt).from(element).save();
console.log(element);

// var element = document.getElementById('resume-content');
// html2pdf(element);
}


