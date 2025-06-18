const allEducationPreviewContainer = document.getElementById('all-education-preview-container');

export function addEducationPreviewContainer(educationFormCount){
    //Container for each education review
    const educationPreviewContainer = document.createElement("div");
    educationPreviewContainer.id = `education-preview-container-${educationFormCount}`;
    educationPreviewContainer.className = `education-preview-container`;

    //Container for School Degree Input
    const schoolDegreeContainer = document.createElement("div");
    schoolDegreeContainer .id = `school-degree-container-${educationFormCount}`;
    schoolDegreeContainer .className = `school-degree-container`;

    //School Degree Input Review
    const schoolDegreeInputPreview = document.createElement("h4");
    schoolDegreeInputPreview.id = `school-info-preview-container-${educationFormCount}`;
    schoolDegreeInputPreview.className = `school-info-preview-container`;

    allEducationPreviewContainer.append(educationPreviewContainer);
    educationPreviewContainer.append(schoolDegreeContainer);
    schoolDegreeContainer.append(schoolDegreeInputPreview);
    
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