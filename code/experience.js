const button = document.getElementById("addInputBtn");
const experienceFormContainer = document.getElementById("experience-container");
const experiencePreviewContainer = document.getElementById("experience-preview-container");

button.addEventListener("click", () => {
  // // Prevent adding multiple inputs
  // if (document.getElementById('dynamicInput')) return;

  // Create input
  const jobTitle = document.createElement("input");
  jobTitle.type = "text";
  jobTitle.id = "job-title";
  jobTitle.placeholder = "Job Title";

  // Create display area
  const preview = document.createElement("div");
  preview.id = "preview";
  preview.textContent = "You typed: ";

  experienceFormContainer.appendChild(jobTitle);
  experiencePreviewContainer.appendChild(preview);

  // Add input event listener
  jobTitle.addEventListener("input", () => {
    preview.textContent = "You typed: " + jobTitle.value;
  });
});


function updateExperience() {

}

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
