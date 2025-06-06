const experienceFormsContainer = document.getElementById("all-experience-container");
const experiencePreviewsContainer = document.getElementById("all-experience-preview-container");
let experienceFormCount = 0;

//Creates the Inputs and Previews For Experience Sections-------------------------------------------------------------------------------
//JOB TITLE INPUT AND PREVIEW
function addJobTitleInput(formCount, jobContainer, jobPreviewContainer){
//-----> Everytime this function is invoke <----
//---> 1 Create a Job Title Input 
  const jobTitle = document.createElement("input");
  jobTitle.type = "text";
  jobTitle.id = "job-title";
  jobTitle.className = "med";
  jobTitle.placeholder = "Job Title";

//---> 2 Create a Job Title Preview Element
  const jobTitlePreview = document.createElement('h4');
  jobTitlePreview.id = `preview-job-title- ${formCount}`;
  experiencePreviewsContainer.appendChild(jobTitlePreview)

//---> 3. Add Input Element To Job Container
  jobContainer.appendChild(jobTitle);
 
//---> 4. Add The Job Title Preview Element To The Preview Container
  jobPreviewContainer.appendChild(jobTitlePreview);

//---> 5. Listen for the input and add it to the preview
  jobTitle.addEventListener("input", () => {
    jobTitlePreview.textContent = jobTitle.value;
  });
}

//EMPLOYER NAME INPUT AND PREVIEW
function addEmployerNameInput(formCount, jobContainer, jobPreviewContainer){
//-----> Everytime this function is invoke <----
//---> 1 Create a Employer Name Input 
  const employerName = document.createElement("input");
  employerName.type = "text";
  employerName.id = "employer-name";
  employerName.className = "med";
  employerName.placeholder = "Employer/Company Name";

//---> 2 Create a Employer Name Preview Element
  const employerNamePreview = document.createElement('p');
  employerNamePreview.id = `preview-employer-name- ${formCount}`;
  experiencePreviewsContainer.appendChild(employerNamePreview)

//---> 3. Add Input Element To Job Container
  jobContainer.appendChild(employerName);
 
//---> 4. Add The Employer Name Preview Element To The Preview Container
  jobPreviewContainer.appendChild(employerNamePreview);

  // ---> Listen for the input and add it to the preview
  employerName.addEventListener("input", () => {
    employerNamePreview.textContent = employerName.value;
  })
}

//EMPLOYER CITY INPUT AND PREVIEW
function addEmployerCityInput(formCount, jobContainer, jobPreviewContainer){
  // ---> Create Employer City Input
  const employerCity = document.createElement("input");
  employerCity.type = "text";
  employerCity.id = "employer-city";
  employerCity.className = "med";
  employerCity.placeholder = "City";


//---> 2 Create a Employer City Preview Element
  const employerCityPreview = document.createElement('p');
  employerCityPreview.id = `preview-employer-city- ${formCount}`;
  experiencePreviewsContainer.appendChild(employerCityPreview)

//---> 3. Add Input Element To Job Container
  jobContainer.appendChild(employerCity);
 
//---> 4. Add The Employer City Preview Element To The Preview Container
  jobPreviewContainer.appendChild(employerCityPreview);

  // ---> Listen for the input and add it to the preview
  employerCity.addEventListener("input", () => {
    employerCityPreview.textContent = employerCity.value;
  })
}

//EMPLOYER STATE INPUT AND PREVIEW
function addEmployerStateInput(formCount, jobContainer, jobPreviewContainer){
  // ---> Create Employer State Input
  const employerState = document.createElement("input");
  employerState.type = "text";
  employerState.id = "employer-state";
  employerState.className = "med";
  employerState.placeholder = "State";


//---> 2 Create a Employer State Preview Element
  const employerStatePreview = document.createElement('p');
  employerStatePreview.id = `preview-employer-state- ${formCount}`;
  experiencePreviewsContainer.appendChild(employerStatePreview)

//---> 3. Add Input Element To Job Container
  jobContainer.appendChild(employerState);
 
//---> 4. Add The Employer State Preview Element To The Preview Container
  jobPreviewContainer.appendChild(employerStatePreview);

  // ---> Listen for the input and add it to the preview
  employerState.addEventListener("input", () => {
    employerStatePreview.textContent = employerState.value;
  })
}

function addStartDate(formCount, jobContainer, jobPreviewContainer){
// Create Employer Start Date Input
  const startDate = document.createElement("input");
  startDate.type = "month";
  startDate.id = "start-date";
  startDate.className = "med";
  startDate.placeholder = "Start Date";

  //---> 2 Create a Start Date Preview Element
  const startDatePreview = document.createElement('p');
  startDatePreview.id = `preview-start-date- ${formCount}`;
  experiencePreviewsContainer.appendChild(startDatePreview)

//---> 3. Add Input Element To Job Container
  jobContainer.appendChild(startDate);
 
//---> 4. Add The Employer State Preview Element To The Preview Container
  jobPreviewContainer.appendChild(startDatePreview);

  // ---> Listen for the input and add it to the preview
  startDate.addEventListener("input", () => {
    startDatePreview.textContent = startDate.value;
  })
}


function addEndDate(formCount, jobContainer, jobPreviewContainer){
  // Create Employer End Date Input
  const endDate = document.createElement("input");
  endDate.type = "month";
  endDate.id = "end-date";
  endDate.className = "med";
  endDate.placeholder = "End Date";

  //---> 2 Create a End Date Preview Element
  const endDatePreview = document.createElement('p');
  endDatePreview.id = `preview-end-date- ${formCount}`;
  experiencePreviewsContainer.appendChild(endDatePreview)

//---> 3. Add Input Element To Job Container
  jobContainer.appendChild(endDate);
 
//---> 4. Add The Employer State Preview Element To The Preview Container
  jobPreviewContainer.appendChild(endDatePreview);

  // ---> Listen for the input and add it to the preview
  endDate.addEventListener("input", () => {
    endDatePreview.textContent = endDate.value;
  })
}

export default function addNewExperienceSection(buttonName){
  buttonName.addEventListener("click", () => {
  experienceFormCount++;
  // 1. One Job Form Container Is Created----------------------------------------------
  const jobContainer = document.createElement('div');
  jobContainer.id = `job-form-container-${experienceFormCount}`;

  // 2. One Experience Container Is Created
  const jobPreviewContainer = document.createElement('div');
  jobPreviewContainer.id = `job-preview-container-${experienceFormCount}`;
  jobPreviewContainer.className = `experience-details`

  // Add Job Form Container to Experience Forms Container
  experienceFormsContainer.appendChild(jobContainer);

 // Add Job Preview Container to Experience Previews Container
  experiencePreviewsContainer.appendChild(jobPreviewContainer);


  addJobTitleInput(experienceFormCount, jobContainer, jobPreviewContainer);
  addEmployerNameInput(experienceFormCount, jobContainer, jobPreviewContainer);
  addEmployerCityInput(experienceFormCount, jobContainer, jobPreviewContainer);
  addEmployerStateInput(experienceFormCount, jobContainer, jobPreviewContainer);
  addStartDate(experienceFormCount, jobContainer, jobPreviewContainer);
  addEndDate(experienceFormCount, jobContainer, jobPreviewContainer);


})

}


//--------------------------------------------------------------------------------------------------------------------------------------

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
