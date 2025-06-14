//Preview Elements passed down to experience.js
const experiencePreviewsContainer = document.getElementById("all-experience-preview-container");//Container for all experience review

export function addExperiencePreviewContainer(experienceFormCount){
      //EXPERIENCE PREVIEW--------------------------------------------------------------------------------------------------- 
    //Main container for each work experience preview
    const workExperienceMainPreviewContainer = document.createElement("div");
    workExperienceMainPreviewContainer.id = `work-experience-main-preview-container-${experienceFormCount}`;
    workExperienceMainPreviewContainer.className = `experience-details`;
    experiencePreviewsContainer.appendChild(workExperienceMainPreviewContainer);
    return workExperienceMainPreviewContainer;
}

//EMPLOYER NAME AND POSITION PREVIEW---------------------------------------------------------------------------------------------
//Container
export function addEmployerNamePositionPreviewContainer(experienceFormCount){
    const employerNamePositionPreviewContainer = document.createElement('div');
    employerNamePositionPreviewContainer.id = `employer-name-position-preview-container-${experienceFormCount}`;
    employerNamePositionPreviewContainer.className = 'employer-name-position-preview';

    return employerNamePositionPreviewContainer;
}

//EMPLOYER NAME--------------------------------------------------------------------------
export function addEmployerNamePreviewElement(employerNamePreviewElementCount) {
  const employerNamePreviewElement = document.createElement("h2");
  employerNamePreviewElement.id = `employer-name-preview-${employerNamePreviewElementCount}`;

  return employerNamePreviewElement;
}

//POSITION-------------------------------------------------------------------------------
export function addPositionPreviewElement(positionPreviewCount) {
  const positionPreviewElement = document.createElement("h2");
  positionPreviewElement.id = `position-preview-${positionPreviewCount}`;
  positionPreviewElement.className = 'position-preview';

  return positionPreviewElement;
}

//START AND END DATES AND EMPLOYER CITY AND STATE PREVIEW
//Container
export function addemployerDatesLocationPreviewContainer(experienceFormCount){
    const employerDatesLocationPreviewContainer = document.createElement("div");
    employerDatesLocationPreviewContainer.id = `employer-dates-location-preview-container-${experienceFormCount}`;
    employerDatesLocationPreviewContainer.className = 'employer-dates-location-preview';

    return employerDatesLocationPreviewContainer;
}

export function addemployerDatesPreviewContainer(experienceFormCount){
  const employerDatesPreviewContainer = document.createElement("div");
    employerDatesPreviewContainer.id = `employer-dates-preview-container-${experienceFormCount}`;
    employerDatesPreviewContainer.className = 'employer-dates-preview';

    return employerDatesPreviewContainer;
}

//START DATE PREVIEW
export function addStartDatePreviewElement(startDatePreviewElementCount) {
  const startDatePreviewElement = document.createElement("p");
  startDatePreviewElement.id = `preview-start-date- ${startDatePreviewElementCount}`;

  return startDatePreviewElement;
}

//END DATE PREVIEW
export function addEndDatePreviewElement(endDatePreviewElementCount) {
  const endDatePreviewElement = document.createElement("p");
  endDatePreviewElement.id = `preview-end-date- ${endDatePreviewElementCount}`;

  return endDatePreviewElement;
}

//Location Preview Container
export function addemployerLocationPreviewContainer(experienceFormCount){
  const employerLocationPreviewContainer = document.createElement("div");
    employerLocationPreviewContainer.id = `employer-location-preview'-container-${experienceFormCount}`;
    employerLocationPreviewContainer.className = 'employer-location-preview';

    return employerLocationPreviewContainer;
}

///EMPLOYER CITY
export function addEmployerCityPreviewElement(employerCityPreviewElementCount) {
  const employerCityPreviewElement = document.createElement("p");
  employerCityPreviewElement.id = `preview-employer-city- ${employerCityPreviewElementCount}`;
  employerCityPreviewElement.className = 'preview-employer-city';

  return employerCityPreviewElement;
}

///EMPLOYER STATE
export function addEmployerStatePreviewElement(employerStatePreviewElementCount) {
  const employerStatePreviewElement = document.createElement("p");
  employerStatePreviewElement.id = `preview-employer-state- ${employerStatePreviewElementCount}`;
  employerStatePreviewElement.className = 'preview-employer-state';

  return employerStatePreviewElement;
}

//JOB DUTIES: Unorderd List
export function addJobDutyULPreviewElement(formCount){
    const jobDutyULPreviewElement = document.createElement('ul');
    jobDutyULPreviewElement.id = `job-duty-list-${formCount}`;

    return jobDutyULPreviewElement ;
}

//JOB DUTIES: List Item
export function addJobDutyLIPreviewElement(formCount, jobDutyCount){
  const jobDutyListItemPreviewElement = document.createElement('li');
  jobDutyListItemPreviewElement.id = `job-duty-li-preview-${jobDutyCount}-for-experience-${formCount}`;
  jobDutyListItemPreviewElement.className = 'job-duty-li-preview';

  return jobDutyListItemPreviewElement;
}