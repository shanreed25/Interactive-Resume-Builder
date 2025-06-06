const experienceFormsContainer = document.getElementById("all-experience-container");
const experiencePreviewsContainer = document.getElementById("all-experience-preview-container");
let experienceFormCount = 0;

//Creates the Inputs and Previews For Experience Sections-------------------------------------------------------------------------------

 
//START DATE------------------------------------------------------------------------------------
function addStartDate(formCount, jobFormContainer, jobPreviewContainer, jobDatesPreviewContainer){
// Create Employer Start Date Input and adds it to the Job Form Container
  const startDate = document.createElement("input");
  startDate.type = "month";
  startDate.id = "start-date";
  startDate.className = "med";
  startDate.placeholder = "Start Date";
  jobFormContainer.appendChild(startDate);

  //---> 2 Create a Start Date Preview Element and adds it to the Job Dates Preview Container
  const startDatePreview = document.createElement('p');
  startDatePreview.id = `preview-start-date- ${formCount}`;
  jobDatesPreviewContainer.appendChild(startDatePreview);

  // ---> Listen for the input and add it to the preview
  startDate.addEventListener("input", () => {
  //Converts the date format
    const startDateValue = startDate.value;// e.g., "2010-06"
    if (startDateValue) {
    const [year, month] = startDateValue.split("-");
    const date = new Date(year, month - 1); // Month is zero-based
    const options = { year: "numeric", month: "long" };
    startDatePreview.textContent = date.toLocaleDateString("en-US", options);// e.g. June 2010

  } else {
    startDatePreview.textContent = "";
  }
    
  })
}

//END DATE--------------------------------------------------------------------------------------
function addEndDate(formCount, jobFormContainer, jobPreviewContainer, jobDatesPreviewContainer){
  // Create Employer End Date Input and adds it to the Job Form Container
  const endDate = document.createElement("input");
  endDate.type = "month";
  endDate.id = "end-date";
  endDate.className = "med";
  endDate.placeholder = "End Date";
  jobFormContainer.appendChild(endDate);

  //---> 2 Create a End Date Preview Element and adds it to the Job Dates Preview Container
  const endDatePreview = document.createElement('p');
  endDatePreview.id = `preview-end-date- ${formCount}`;
  jobDatesPreviewContainer.appendChild(endDatePreview)
  
  // ---> Listen for the input and add it to the preview
   endDate.addEventListener("input", () => {
  //Converts the date format
    const endDateValue = endDate.value;// e.g., "2010-06"
    if (endDateValue) {
    const [year, month] = endDateValue.split("-");
    const date = new Date(year, month - 1); // Month is zero-based
    const options = { year: "numeric", month: "long" };
    endDatePreview.textContent = date.toLocaleDateString("en-US", options);// e.g. June 2010

  } else {
    endDatePreview.textContent = "";
  }

})}

//JOB TITLE-------------------------------------------------------------------------------------
function addJobTitleInput(formCount, jobFormContainer, jobPreviewContainer){
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
  jobFormContainer.appendChild(jobTitle);
 
//---> 4. Add The Job Title Preview Element To The Preview Container
  jobPreviewContainer.appendChild(jobTitlePreview);

//---> 5. Listen for the input and add it to the preview
  jobTitle.addEventListener("input", () => {
    jobTitlePreview.textContent = jobTitle.value;
  });
}

//EMPLOYER NAME---------------------------------------------------------------------------------
function addEmployerNameInput(formCount, jobFormContainer, jobPreviewContainer){
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
  jobFormContainer.appendChild(employerName);
 
//---> 4. Add The Employer Name Preview Element To The Preview Container
  jobPreviewContainer.appendChild(employerNamePreview);

  // ---> Listen for the input and add it to the preview
  employerName.addEventListener("input", () => {
    employerNamePreview.textContent = employerName.value;
  })
}

//EMPLOYER CITY---------------------------------------------------------------------------------
function addEmployerCityInput(formCount, jobFormContainer, jobPreviewContainer){
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
  jobFormContainer.appendChild(employerCity);
 
//---> 4. Add The Employer City Preview Element To The Preview Container
  jobPreviewContainer.appendChild(employerCityPreview);

  // ---> Listen for the input and add it to the preview
  employerCity.addEventListener("input", () => {
    employerCityPreview.textContent = employerCity.value;
  })
}

//EMPLOYER STATE--------------------------------------------------------------------------------
function addEmployerStateInput(formCount, jobFormContainer, jobPreviewContainer){
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
  jobFormContainer.appendChild(employerState);
 
//---> 4. Add The Employer State Preview Element To The Preview Container
  jobPreviewContainer.appendChild(employerStatePreview);

  // ---> Listen for the input and add it to the preview
  employerState.addEventListener("input", () => {
    employerStatePreview.textContent = employerState.value;
  })
}


//Adds a new experience form and review section and appends it to the main container
export default function addNewExperienceSection(buttonName){
  buttonName.addEventListener("click", () => {
  experienceFormCount++;//counts the number of forms and experience sections created
  // 1. One Experience Form Container Is Created-----------------------------------------------------------------------------------
  //and added to the Experience Forms Container
  const jobFormContainer = document.createElement('div');
  jobFormContainer.id = `job-form-container-${experienceFormCount}`;
  experienceFormsContainer.appendChild(jobFormContainer);

  // 2. One Experience Review Container with two container inside Is Created-------------------------------------------------------
  //and added to the Experience Previews Container
  const jobPreviewContainer = document.createElement('div');
  jobPreviewContainer.id = `job-preview-container-${experienceFormCount}`;
  jobPreviewContainer.className = `experience-details`;
  experiencePreviewsContainer.appendChild(jobPreviewContainer);
  //First container hold experience preview start and end dates----------------------------------------
  const jobDatesPreviewContainer = document.createElement('div');
  jobDatesPreviewContainer.id = `job-dates-preview-container-${experienceFormCount}`;
  jobPreviewContainer.appendChild(jobDatesPreviewContainer);
  //Second container hold experience preview details----------------------------------------
  const jobDetailsPreviewContainer = document.createElement('div');
  jobDetailsPreviewContainer.id = `job-details-preview-container-${experienceFormCount}`;
  jobPreviewContainer.appendChild(jobDetailsPreviewContainer);

  
 

  //These functions do the work of creating the inputs and adding them to the containers
  addStartDate(experienceFormCount, jobFormContainer, jobPreviewContainer, jobDatesPreviewContainer);
  addEndDate(experienceFormCount, jobFormContainer, jobPreviewContainer, jobDatesPreviewContainer);
  addJobTitleInput(experienceFormCount, jobFormContainer, jobPreviewContainer);
  addEmployerNameInput(experienceFormCount, jobFormContainer, jobPreviewContainer);
  addEmployerCityInput(experienceFormCount, jobFormContainer, jobPreviewContainer);
  addEmployerStateInput(experienceFormCount, jobFormContainer, jobPreviewContainer);
  


})

}
//---------------------------------------------------------------------------------------------------------------------------------------
