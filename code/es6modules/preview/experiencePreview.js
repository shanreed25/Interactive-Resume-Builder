import {addPreviewContainer} from './preview.js';


//Functions to create Experience Preview Containers

//CONTAINERS-----------------------------------------------------
//Preview Container for all work experience
const allExperiencePreviewsContainer = document.getElementById("all-experience-preview-container");//Container for all experience review

//Preview Container for each work experience
export function experiencePreviewContainer(experienceFormCount){
    //Main container for each work experience preview
    const experiencePreviewContainer = addPreviewContainer(
        'div', `work-experience-main-preview-container-${experienceFormCount}`, 
        'work-experience-main-preview-container', 
        allExperiencePreviewsContainer
    )
    
    return experiencePreviewContainer;
}

//Preview Container for employer name and position
export function employerNamePositionPreviewContainer(experienceFormCount){
    //EMPLOYER NAME AND POSITION CONTAINER
    const employerNamePositionPreviewContainer = addPreviewContainer(
        'div', `employer-name-position-preview-container-${experienceFormCount}`, 
        'employer-name-position-preview-container', 
        experiencePreviewContainer(experienceFormCount));
    
    return employerNamePositionPreviewContainer;
};


//Preview Container for job dates and location
export function jobDatesAndLocationPreviewContainer(experienceFormCount){
    //JOB DATES AND LOCATION CONTAINER
    const employerDatesLocationPreviewContainer = addPreviewContainer(
        'div',`employer-dates-location-preview-container-${experienceFormCount}`, 
        'employer-dates-location-preview-container', 
        experiencePreviewContainer(experienceFormCount));
  
    return employerDatesLocationPreviewContainer;
};

//Preview Container for job dates
export function jobDatesPreviewContainer(experienceFormCount){
    //JOB DATES CONTAINER
    const employerDatesPreviewContainer = addPreviewContainer(
        'div',`employer-dates-preview-container-${experienceFormCount}`, 
        'employer-dates-preview-container', 
        jobDatesAndLocationPreviewContainer(experienceFormCount))

    return employerDatesPreviewContainer;
};

//Preview Container for job location
export function jobLocationPreviewContainer(experienceFormCount){
    //JOB LOCATION CONTAINER
    const employerLocationPreviewContainer = addPreviewContainer(
        'div',`employer-location-preview-container-${experienceFormCount}`, 
        'employer-location-preview-container', 
        jobDatesAndLocationPreviewContainer(experienceFormCount))

    return employerLocationPreviewContainer;
};


export function  employerDetailsPreviewContainer(experienceFormCount){
      //Second container hold experience preview details----------------------------------------
    const employerDetailsPreviewContainer = addPreviewContainer(
        'div', `employer-details-preview-container-${experienceFormCount}`, 
        'employer-details-preview',
        experiencePreviewContainer(experienceFormCount)
    )
   
    return employerDetailsPreviewContainer;
}






