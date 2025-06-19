const allEducationPreviewContainer = document.getElementById('all-education-preview-container');

export function addEducationPreviewContainer(educationFormCount){
    //Container for each education preview
    const educationPreviewContainer = document.createElement("div");
    educationPreviewContainer.id = `education-preview-container-${educationFormCount}`;
    educationPreviewContainer.className = `education-preview-container`;

    //Container for School Degree Input Preview
    const schoolDegreePreviewContainer = document.createElement("div");
    schoolDegreePreviewContainer.id = `school-degree-preview-container-${educationFormCount}`;
    schoolDegreePreviewContainer.className = `school-degree-preview-container`;

    //School Degree Input Preview
    const schoolDegreeInputPreview = document.createElement("h4");
    schoolDegreeInputPreview.id = `school-info-preview-container-${educationFormCount}`;
    schoolDegreeInputPreview.className = `school-info-preview-container`;


    //Container for School Name and dates Input Preview
    const schoolNameDatesPreviewContainer = document.createElement("div");
    schoolNameDatesPreviewContainer.id = `school-name-dates-preview-container-${educationFormCount}`;
    schoolNameDatesPreviewContainer.className = `school-name-dates-preview-container`;

    //School Name Preview
    const schoolNameInputPreview = document.createElement("h5");
    schoolNameInputPreview.id = `school-name-input-preview-${educationFormCount}`;
    schoolNameInputPreview.className = `school-name-input-preview`;

    //Container for School Dates Input Preview
    const schoolDatesPreviewContainer = document.createElement("div");
    schoolDatesPreviewContainer.id = `school-dates-preview-container-${educationFormCount}`;
    schoolDatesPreviewContainer.className = `school-dates-preview-container`;

     //School Start Date Preview
    const schoolStartDateInputPreview = document.createElement("h5");
    schoolStartDateInputPreview.id = `school-start-date-input-preview-${educationFormCount}`;
    schoolStartDateInputPreview.className = `school-start-date-input-preview`;

     //School End Date Preview
    const schoolEndDateInputPreview = document.createElement("h5");
    schoolEndDateInputPreview.id = `school-end-date-input-preview-${educationFormCount}`;
    schoolEndDateInputPreview.className = `school-end-date-input-preview`;

    


    allEducationPreviewContainer.append(educationPreviewContainer);
    educationPreviewContainer.append(schoolDegreePreviewContainer, schoolNameDatesPreviewContainer);
    schoolDegreePreviewContainer.append(schoolDegreeInputPreview);
    schoolNameDatesPreviewContainer .append(schoolNameInputPreview, schoolDatesPreviewContainer);
    schoolDatesPreviewContainer.append(schoolStartDateInputPreview, schoolEndDateInputPreview)
    
    return educationPreviewContainer;

};


// export function addEducationPreviewContainer(educationFormCount){
//       //EDUCATION PREVIEW--------------------------------------------------------------------------------------------------- 
//     //Main container for each education preview
    
//     // experiencePreviewsContainer.appendChild(educationPreviewContainer);
//     return educationPreviewContainer;
// }

// export function addSchoolInfoPreviewContainer(educationFormCount){
//       //EDUCATION PREVIEW--------------------------------------------------------------------------------------------------- 
//     //Main container for each education preview
 
//     return schoolInfoPreviewContainer;
// }



// export function addSchoolNamePreviewElement(educationFormCount){
//       //EDUCATION PREVIEW--------------------------------------------------------------------------------------------------- 
//     //Main container for each education preview
//     const schoolNamePreviewElement = document.createElement("h4");
//     schoolNamePreviewElement.id = `school-info-preview-container-${educationFormCount}`;
//     schoolNamePreviewElement.className = `school-info-preview-container`;
//     return schoolNamePreviewElement;
// }

// export function addNewEducationPreviewSection(formCount){
//     const educationPreviewContainer = addEducationPreviewContainer(formCount);
//     const educationSchoolInfoPreviewContainer = addSchoolInfoPreviewContainer(formCount);
//     const schoolNamePreviewElement = addSchoolNamePreviewElement(formCount);

//     educationPreviewContainer.appendChild(educationSchoolInfoPreviewContainer);
//     educationSchoolInfoPreviewContainer.appendChild(schoolNamePreviewElement);


//     return educationPreviewContainer;

// }