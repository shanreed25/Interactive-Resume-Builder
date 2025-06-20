import { addContainer, addInput, addJobDutyButton,} from "./experienceInputs.js";
import {addPreviewElement} from "./experiencePreview.js";

//Passed down to resume-sections.js

//EMPLOYER NAME---------------------------------------------------------------------------------
export function addEmployerName(formCount, jobFormContainer, employerNamePositionContainer) {
  //Create a Employer Name Input 
  const employerNameInput = addInput("text", `employer-name-input-${formCount}`, "med", "Employer/Company Name" );
  jobFormContainer.appendChild(employerNameInput);

  //Create a Employer Name Preview Element
  const employerNamePreviewElement = addPreviewElement("h2", `employer-name-preview-${formCount}`, "employer-name-preview");
  employerNamePositionContainer.appendChild(employerNamePreviewElement);

  // ---> Listen for the input and add the value to the preview
  employerNameInput.addEventListener("input", () => {
    employerNamePreviewElement.textContent = employerNameInput.value;
  })
}

//POSITION-------------------------------------------------------------------------------------
export function addPosition(formCount, jobFormContainer, employerNamePositionContainer) {
  // Create a Position Input 
  const positionInput = addInput("text", `position-input-${formCount}`, "med", "Position" );
  jobFormContainer.appendChild(positionInput);

  //Create a Position Preview Element
  const positionPreviewElement = addPreviewElement("h2", `position-preview-${formCount}`, "position-preview");
  employerNamePositionContainer.appendChild(positionPreviewElement);

  //Listen for the input and add it to the preview
  positionInput.addEventListener("input", () => {
    positionPreviewElement.textContent = `  - ${positionInput.value}`;
  });
}

//START DATE------------------------------------------------------------------------------------
export function addStartDate(formCount, jobFormContainer, employerDatesPreviewContainer) {
  // Create Employer Start Date Input and adds it to the Job Form Container
  const startDateInput = addInput("month", `start-date-input-${formCount}`, "med", "Start Date" );
  jobFormContainer.appendChild(startDateInput);

  //Create a Start Date Preview Element and adds it to the Job Dates Preview Container
  const startDatePreviewElement = addPreviewElement("p", `start-date-preview-${formCount}`, "start-date-preview");
  employerDatesPreviewContainer.appendChild(startDatePreviewElement);

  const dateSeparator = document.createElement('p');
  employerDatesPreviewContainer.appendChild(dateSeparator);

  // ---> Listen for the input and add it to the preview
  startDateInput.addEventListener("input", () => {
    //Converts the date format
    const startDateValue = startDateInput.value;// e.g., "2010-06"
    if (startDateValue) {
      const [year, month] = startDateValue.split("-");
      const date = new Date(year, month - 1); // Month is zero-based
      const options = { year: "numeric", month: "long" };
      startDatePreviewElement.textContent = date.toLocaleDateString("en-US", options);// e.g. June 2010
      dateSeparator.textContent = "to";

    } else {
      startDatePreviewElement.textContent = "";
    }
  })
}

//END DATE--------------------------------------------------------------------------------------
export function addEndDate(formCount, jobFormContainer, employerDatesPreviewContainer) {
  // Create Employer End Date Input and adds it to the Job Form Container
  const endDateInput = addInput("month", `end-date-input-${formCount}`, "med", "End Date" );
  jobFormContainer.appendChild(endDateInput);

  //---> 2 Create a End Date Preview Element and adds it to the Job Dates Preview Container
  const endDatePreviewElement =  addPreviewElement("p", `end-date-preview-${formCount}`, "end-date-preview");
  employerDatesPreviewContainer.appendChild(endDatePreviewElement)

  // ---> Listen for the input and add it to the preview
  endDateInput.addEventListener("input", () => {
    //Converts the date format
    const endDateValue = endDateInput.value;// e.g., "2010-06"
    if (endDateValue) {
      const [year, month] = endDateValue.split("-");
      const date = new Date(year, month - 1); // Month is zero-based
      const options = { year: "numeric", month: "long" };
      endDatePreviewElement.textContent = date.toLocaleDateString("en-US", options);// e.g. June 2010

    } else {
      endDatePreviewElement.textContent = "";
    }

  })
}

//EMPLOYER CITY---------------------------------------------------------------------------------
export function addEmployerCity(formCount, jobFormContainer, employerLocationPreviewContainer) {
  // ---> Create Employer City Input
  const employerCityInput = addInput("text", `employer-city-input-${formCount}`, "med", "City");
  jobFormContainer.appendChild(employerCityInput);

  //Create a Employer City Preview Element
  const employerCityPreviewElement =  addPreviewElement("p", `employer-city-preview-${formCount}`, "employer-city-preview");
  employerLocationPreviewContainer.appendChild(employerCityPreviewElement)

  // ---> Listen for the input and add it to the preview
  employerCityInput.addEventListener("input", () => {
    employerCityPreviewElement.textContent = employerCityInput.value;
  })
}

//EMPLOYER STATE--------------------------------------------------------------------------------
export function addEmployerState(formCount, jobFormContainer, employerLocationPreviewContainer) {
  // ---> Create Employer State Input
  const employerStateInput = addInput("text", `employer-state-input-${formCount}`, "med", "State");
  jobFormContainer.appendChild(employerStateInput);

  const employerStatePreviewElement = addPreviewElement("p", `employer-state-preview-${formCount}`, "employer-state-preview");
  employerLocationPreviewContainer.appendChild(employerStatePreviewElement)


  // ---> Listen for the input and add it to the preview
  employerStateInput.addEventListener("input", () => {
    employerStatePreviewElement.textContent = `, ${employerStateInput.value}`;
  })
}


//Job Duty
export function addJobDuty(formCount, jobFormContainer, employerDetailsPreviewContainer) {
  let jobDutyCount = 0;

  //Create and add container for job duty inputs to form
  const jobDutyInputsContainer = addContainer(`job-duties-input-container-${formCount}`, 'job-duties-input-container')
  console.log(jobDutyInputsContainer)
  jobFormContainer.appendChild(jobDutyInputsContainer);

  //Create and add Job Duty Button to form
  const jobDutyButton = addJobDutyButton(formCount);
  jobFormContainer.appendChild(jobDutyButton);

  //Create and add Unordered List to the preview
  const jobDutyULPreviewElement = addPreviewElement("ul", `job-duty-list-preview-${formCount}`, "job-duty-list-preview");
  employerDetailsPreviewContainer.appendChild(jobDutyULPreviewElement);

  //Listen for Button
  jobDutyButton.addEventListener('click', () => {
    jobDutyCount++;//count of the number of list item added to each unordered list

    //Create and add job duty input to form container
    // const dutyInput = addjobDutyInput(formCount, jobDutyCount, jobFormContainer);

     const dutyInput = addInput("text", `duty-input-${jobDutyCount}-for-experience-${formCount}`, "duty-input", "Add Job Duty/Description");
    jobDutyInputsContainer.appendChild(dutyInput);

    //Create and add job duty list item to preview container
    const jobDutyLIPreviewElement = addPreviewElement("li", `job-duty-li-preview-${jobDutyCount}-for-experience-${formCount}`, "job-duty-li-preview");
    jobDutyULPreviewElement.append(jobDutyLIPreviewElement);

    // ---> Listen for the input and add the value to the preview
    dutyInput.addEventListener("input", () => {

      jobDutyLIPreviewElement.textContent = dutyInput.value
    })
  })
}

