import {createPreviewContainer, addPreviewContainer} from './previewElements.js';

//Preview Container for each degree and gpa 
export function degreePreviewContainer(educationFormCount, parentContainer){
    //Main container for each education preview
    const degreePreviewContainer = addPreviewContainer(
        'div', `degree-preview-container-${educationFormCount}`, 
        'degree-preview-container', 
        parentContainer
    )
    // console.log(degreeGpaPreviewContainer)
    return degreePreviewContainer;
}


//Preview Container for each degree
export function gpaPreviewContainer(educationFormCount, parentContainer){
    //Main container for each education preview
    const gpaPreviewContainer = addPreviewContainer(
        'div', `gpa-preview-container-${educationFormCount}`, 
        'gpa-preview-container',
        parentContainer
    );
    
    return gpaPreviewContainer;
}


export function addEducationPreviewContainer(educationFormCount){

    //1. CREATE EDUCATION PREVIEW CONTAINERS
    //Container for each education preview
    const educationPreviewContainer = createPreviewContainer('div', `education-preview-container-${educationFormCount}`, 'education-preview-container');

    //Container for School Degree Input Preview
    const schoolDegreePreviewContainer = createPreviewContainer('div', `school-degree-preview-container-${educationFormCount}`, 'school-degree-preview-container');

    //Container for School Name and dates Input Preview
    const schoolNameDatesPreviewContainer = createPreviewContainer('div', `school-name-dates-preview-container-${educationFormCount}`, 'school-name-dates-preview-container');

    //Container for School Dates Input Preview
    const schoolDatesPreviewContainer = createPreviewContainer('div', `school-dates-preview-container-${educationFormCount}`, 'school-dates-preview-container');

    //2. CREATE EDUCATION PREVIEW ELEMENTS
    //School Degree Input Preview
    const schoolDegreeInputPreview = addPreviewElement('h4', `degree-preview-${educationFormCount}`, 'degree-preview');

    //School Name Preview
    const schoolNameInputPreview = addPreviewElement('h5', `school-name-preview-${educationFormCount}`, 'school-name-preview');

     //School Start Date Preview
    const schoolStartDateInputPreview = addPreviewElement('h5', `school-start-date-preview-${educationFormCount}`, 'school-start-date-preview');

     //School End Date Preview
    const schoolEndDateInputPreview = addPreviewElement('h5', `school-end-date-preview-${educationFormCount}`, 'school-end-date-preview');

    
    //3. ADD
    allEducationPreviewContainer.append(educationPreviewContainer);
    educationPreviewContainer.append(schoolDegreePreviewContainer, schoolNameDatesPreviewContainer);
    schoolDegreePreviewContainer.append(schoolDegreeInputPreview);
    schoolNameDatesPreviewContainer .append(schoolNameInputPreview, schoolDatesPreviewContainer);
    schoolDatesPreviewContainer.append(schoolStartDateInputPreview, schoolEndDateInputPreview)
    
    return educationPreviewContainer;

};