const allEducationFormsContainer = document.getElementById('all-education-forms-container');

//Container and Inputs For School Name nad Degree
export function addEducationFormContainer(educationFormCount){
    //Container for each education Form
    const educationFormContainer = document.createElement('div')
    educationFormContainer.id = `education-form-container-${educationFormCount}`;
    educationFormContainer.className = 'education-form-container';

    //Container for each degree input------------------------------------------------------------------
    const degreeInputContainer = document.createElement('div')
    degreeInputContainer.id = `degree-input-container-${educationFormCount}`;
    degreeInputContainer.className = 'degree-input-container';

    // Degree Input
    const degreeInput = document.createElement('input')
    degreeInput.id = `degree-input-${educationFormCount}`;
    degreeInput.className = 'degree-input';

     //Container for school name and dates inputs------------------------------------------------------------------
    const schoolNameDateInputContainer = document.createElement('div')
    schoolNameDateInputContainer.id = `school-name-date-input-container-${educationFormCount}`;
    schoolNameDateInputContainer.className = 'school-name-date-input-container';

    // School Name Input
    const schoolNameInput = document.createElement('input')
    schoolNameInput.id = `school-name-input-${educationFormCount}`;
    schoolNameInput.className = 'school-name-input';

    const schoolDatesInputContainer = document.createElement('div')
    schoolDatesInputContainer.id = `school-dates-input-container-${educationFormCount}`;
    schoolDatesInputContainer.className = 'school-dates-input-container';
    
    // School Start Date Input
    const schoolStartDateInput = document.createElement('input')
    schoolStartDateInput.id = `school-start-date-input-${educationFormCount}`;
    schoolStartDateInput.className = 'school-start-date-input';
    schoolStartDateInput.type = 'month';

     // School Start Date Input
    const schoolEndDateInput = document.createElement('input')
    schoolEndDateInput.id = `school-end-date-input-${educationFormCount}`;
    schoolEndDateInput.className = 'school-end-date-input';
    schoolEndDateInput.type = 'month';

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


    // Education Form Container with Input Containers
    educationFormContainer.append(degreeInputContainer, schoolNameDateInputContainer);
    //Degree Input Container with degree Input
    degreeInputContainer.append(degreeInput);

    //School Name and Dates Input Container with school name input and school dates container
    schoolNameDateInputContainer.append(schoolNameInput, schoolDatesInputContainer);
    schoolDatesInputContainer.append(schoolStartDateInput, schoolEndDateInput )
    allEducationFormsContainer.append(educationFormContainer);
    
    return educationFormContainer;
}



// export function addEducationFormContainer(educationFormCount){
//     const educationFormContainer = document.createElement('div')
//     educationFormContainer.id = `education-form-container-${educationFormCount}`;
//     educationFormContainer.className = 'education-form-container';
    
    
//     return educationFormContainer;
// }

