const allEducationFormsContainer = document.getElementById('all-education-forms-container');

//Container and Inputs For School Name nad Degree
export function addEducationFormContainer(educationFormCount){
    //Container for each education Form
    const educationSchoolInfoContainer = document.createElement('div')
    educationSchoolInfoContainer.id = `education-school-info-container-${educationFormCount}`;
    educationSchoolInfoContainer.className = 'education-school-info-container';


    // School Degree Input
    const educationFormSchoolDegreeInput = document.createElement('input')
    educationFormSchoolDegreeInput.id = `education-school-degree-input-${educationFormCount}`;
    educationFormSchoolDegreeInput.className = 'education-school-degree-input';

    // //School Name Input
    // const educationFormSchoolNameInput = document.createElement('input')
    // educationFormSchoolNameInput.id = `education-school-name-input-${educationFormCount}`;
    // educationFormSchoolNameInput.className = 'education-school-name-input';


    //  // School Degree Input
    // const educationFormSchoolDegreeInput = document.createElement('input')
    // educationFormSchoolDegreeInput.id = `education-school-degree-input-${educationFormCount}`;
    // educationFormSchoolDegreeInput.className = 'education-school-degree-input';


    // // School Degree Input
    // const educationFormSchoolDegreeInput = document.createElement('input')
    // educationFormSchoolDegreeInput.id = `education-school-degree-input-${educationFormCount}`;
    // educationFormSchoolDegreeInput.className = 'education-school-degree-input';

    educationSchoolInfoContainer.append( educationFormSchoolDegreeInput);
    allEducationFormsContainer.append(educationSchoolInfoContainer)
    
    return educationSchoolInfoContainer;
}



// export function addEducationFormContainer(educationFormCount){
//     const educationFormContainer = document.createElement('div')
//     educationFormContainer.id = `education-form-container-${educationFormCount}`;
//     educationFormContainer.className = 'education-form-container';
    
    
//     return educationFormContainer;
// }

