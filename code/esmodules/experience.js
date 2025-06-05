const newExperienceButton = document.getElementById("new-experience-form");
const experienceFormsContainer = document.getElementById("all-experience-container");
const experiencePreviewContainer = document.getElementById("all-experience-preview-container");
let experienceFormCount = 0;


function addJobTitleInput(formCount){
//-----> Everytime this function is invoke <----

// 1. One Job Form Is Created----------------------------------------------
// ---> 1.1 Create a Container for Experience Input
const jobContainer = document.createElement('div');
jobContainer.id = `job-form-container-${formCount}`;

// ---> 1.2 Add the container to the Experience forms Container
 experienceFormsContainer.appendChild(jobContainer);

  // ---> 1.3 Create a Job Title Input 
  const jobTitle = document.createElement("input");
  jobTitle.type = "text";
  jobTitle.id = "job-title";
  jobTitle.className = "med";
  jobTitle.placeholder = "Job Title";

  // ---> 1.4 Add Input To Job Container
  jobContainer.appendChild(jobTitle);


  // 2. One Job Preview Is Created------------------------------------------
  // ---> 2.1 Create One Preview Container
  const jobPreviewContainer = document.createElement('div');
  jobPreviewContainer.id = `job-preview-container-${formCount}`;
  jobPreviewContainer.className = `experience-details`

  // ---> 2.2 Add Preview Container to All experience Container
  experiencePreviewContainer.appendChild(jobPreviewContainer);

  //---> 2.3 Create The Job Tile Preview Element
  const jobTitlePreview = document.createElement('h4');
  jobTitlePreview.id = `preview-job-title- ${formCount}`;
  experiencePreviewContainer.appendChild(jobTitlePreview)
 
  // ---> 2.4 The Job Title Preview Element to the preview container
  jobPreviewContainer.appendChild(jobTitlePreview);

 
  // ---> Listen for the input and add it to the preview
  jobTitle.addEventListener("input", () => {
    jobTitlePreview.textContent = jobTitle.value;
  });

  
  
  
}

//Job Title Input-----------------------------------------------------------------------
// function addJobTitleInput(){
//   // ---> Create Job Title Input
//   const jobTitle = document.createElement("input");
//   jobTitle.type = "text";
//   jobTitle.id = "job-title";
//   jobTitle.className = "med";
//   jobTitle.placeholder = "Job Title";

//   // ---> Add Input To Container
//   experienceFormsContainer.appendChild(jobTitle);

//   // ---> Get The Preview Element
//   const jobTitlePreview = document.getElementById('preview-job-title');

//   // ---> Listen for the input and add it to the preview
//   jobTitle.addEventListener("input", () => {
//     jobTitlePreview.textContent = jobTitle.value;
//   })
// }

//Job Title Input-----------------------------------------------------------------------
function addEmployerNameInput(){
  // ---> Create Job Title Input
  const employerName = document.createElement("input");
  employerName.type = "text";
  employerName.id = "employer-name";
  employerName.className = "med";
  employerName.placeholder = "Employer/Company Name";

  // ---> Add Input To Container
  experienceFormsContainer.appendChild(employerName);

  // ---> Get The Preview Element
  const employerNamePreview = document.getElementById('preview-employer-name');

  // ---> Listen for the input and add it to the preview
  employerName.addEventListener("input", () => {
    employerNamePreview.textContent = employerName.value;
  })
}

//Job Title Input-----------------------------------------------------------------------
function addEmployerCityInput(){
  // ---> Create Job Title Input
  const employerCity = document.createElement("input");
  employerCity.type = "text";
  employerCity.id = "employer-city";
  employerCity.className = "med";
  employerCity.placeholder = "City";

  // ---> Add Input To Container
  experienceFormsContainer.appendChild(employerCity);

  // ---> Get The Preview Element
  const employerCityPreview = document.getElementById('preview-employer-city');
  // const employerCityPreview = document.getElementById('preview-employer-city');

  // ---> Listen for the input and add it to the preview
  employerCity.addEventListener("input", () => {
    employerCityPreview.textContent = employerCity.value;
  })
}


newExperienceButton.addEventListener("click", () => {
  experienceFormCount++;
  addJobTitleInput(experienceFormCount);
  addEmployerNameInput();
  addEmployerCityInput();

  // addExperiencePreview(experienceFormCount);

  // console.log(job);

})

// utton.addEventListener("click", () => {
//   // // Prevent adding multiple inputs
//   // if (document.getElementById('dynamicInput')) return;

//   // // Create Employer Start Date Input
//   // const startDate = document.createElement("input");
//   // startDate.type = "month";
//   // startDate.id = "start-date";
//   // startDate.className = "med";
//   // startDate.placeholder = "Start Date";

//   // // Create Employer End Date Input
//   // const endDate = document.createElement("input");
//   // endDate.type = "month";
//   // endDate.id = "end-date";
//   // endDate.className = "med";
//   // endDate.placeholder = "End Date";


//   // // Create Employer Name Input


//   // // Create Employer City Input
//   // const employerCity = document.createElement("input");
//   // employerCity.type = "text";
//   // employerCity.id = "employer-city";
//   // employerCity.className = "med";
//   // employerCity.placeholder = "City";

//   // // Create Employer State Input
//   // const employerState = document.createElement("input");
//   // employerState.type = "text";
//   // employerState.id = "employer-state";
//   // employerState.className = "med";
//   // employerState.placeholder = "State";

//   // Create Experience Preview Area
//   const preview = document.createElement("div");
//   preview.id = "preview";
// //   preview.textContent = "You typed: ";




// const jobTitlePreview = document.getElementById('preview-job-title');
// jobTitlePreview.innerHTML = jobTitle.value

//   //Adding each input to the container in the HTML File
//   experienceFormsContainer.appendChild(jobTitle);
//   experienceFormsContainer.appendChild(jobTitle);
//   experienceFormsContainer.appendChild(jobTitle);
//   experienceFormsContainer.appendChild(employerName);
//   experienceFormsContainer.appendChild(employerCity);
//   experienceFormsContainer.appendChild(employerState);

//   //Preview container
//   experiencePreviewContainer.appendChild(preview);

//   // Add input event listener
//   jobTitle.addEventListener("input", () => {
//     preview.textContent = "You typed: " + jobTitle.value;
//   });
// });

// function updateExperience() {}

//  const button = document.getElementById('addInputBtn');
//             const container = document.getElementById('container');

// button.addEventListener('click', () => {
// // Prevent adding multiple inputs
// // if (document.getElementById('dynamicInput')) return;

// // Create input
// const jobTitle = document.createElement('input');
// input.type = 'text';
// input.id = 'job-title';
// input.placeholder = 'Job Title';

// // Create input
// const employerName = document.createElement('input');
// input.type = 'text';
// input.id = 'employer-name';
// input.placeholder = 'Employer/Company Name';

// // Create input
// const input = document.createElement('input');
// input.type = 'text';
// input.id = 'job-title';
// input.placeholder = 'Job Title';

// // Create label
// const label = document.createElement('label');
// label.setAttribute('for', input.id);
// label.textContent = 'Enter something: ';

// // Create display area
// const display = document.createElement('div');
// display.id = 'display';
// display.textContent = 'You typed: ';

// // Append elements
// container.appendChild(label);
// container.appendChild(input);
// container.appendChild(display);

// // Add input event listener
// input.addEventListener('input', () => {
// display.textContent = 'You typed: ' + input.value;
// });
// });

// let experienceFormCount = 0;

// function addForm() {
//             experienceFormCount++;

//             //Creates a container for the entire experience form
//             const resumeExperienceForm = document.createElement('div');
//             resumeExperienceForm.id = `experience-form-${experienceFormCount}`;
//             resumeExperienceForm.className = 'experience';

//              //Creates a container for the current position checkbox---------------------------------------------------------------
//             const currentPositionContainer = document.createElement('div');
//             currentPositionContainer.id = `current-position-${experienceFormCount}`;
//             currentPositionContainer.className = 'current-position';
//             resumeExperienceForm.appendChild(currentPositionContainer);

//             //Checkbox
//             const checkboxInputField = document.createElement('input');
//             checkboxInputField.type = 'checkbox';
//             checkboxInputField.id = `experience-form-${experienceFormCount}-checkbox`
//             checkboxInputField.name = `form-${experienceFormCount}-checkbox-input`;
//             currentPositionContainer.appendChild(checkboxInputField);

//             //Label For Checkbox
//             const checkboxInputFieldLabel = document.createElement('label')
//             checkboxInputFieldLabel.id = `experience-form-${experienceFormCount}-checkbox-label`
//             checkboxInputFieldLabel.innerHTML = 'I currently work here'
//             currentPositionContainer.appendChild(checkboxInputFieldLabel);

//             //Job Title Input-------------------------------------------------------------------------------------------------------------------
//             const jobTitle = document.createElement('input');
//             jobTitle.type = 'text';
//             jobTitle.placeholder = `Job Title`;
//             jobTitle.name = `job-title-${experienceFormCount}`;
//             jobTitle.id = 'job-title';
//             jobTitle.className = 'med'
//             jobTitle.value = "Worker"
//             resumeExperienceForm.appendChild(jobTitle);
//             console.log(jobTitle)

//             //EmploemployerName Input-------------------------------------------------------------------------------------------------------------------
//             const employerName = document.createElement('input');
//             employerName.type = 'text';
//             employerName.placeholder = `Employer/Company Name`;
//             employerName.name = `employer-name-${experienceFormCount}`;
//             employerName.id = 'employer-name';
//             employerName.className = 'med'
//             resumeExperienceForm.appendChild(employerName);

//             // const submitButton = document.createElement('button');
//             // submitButton.type = 'submit';
//             // submitButton.textContent = 'Submit';
//             // resumeExperienceForm.appendChild(submitButton);

//             const container = document.getElementById('experience-input-container');
//             container.appendChild(resumeExperienceForm);

//         }
