import {createAppendInput} from './createAppendInput.js';
import {createAppendPreviewElement} from './createAppendPreviewElement.js'


//Connects the Inputs to the Preview Elements and Updates then accordingly--------------------------------------------------------------------------------------------------
export function createInputAndPreview(
  formContainer, previewContainer, 
  inputType, inputId, inputClassName, inputPlaceholder, 
  elementType, elementId, elementClassName ) {
    
  //Create a Employer Name Input 
  const formInput = createAppendInput(inputType, inputId, inputClassName, inputPlaceholder, formContainer);
  // formContainer.appendChild(formInput);

  //Create a Employer Name Preview Element
  const inputPreview = createAppendPreviewElement(elementType, elementId, elementClassName, previewContainer);

  // ---> Listen for the input and add the value to the preview
  formInput.addEventListener("input", () => {
    inputPreview.textContent = formInput.value;
  })
};


//Connects the Job Position Inputs to the Preview Elements and Updates then accordingly--------------------------------------------------------------------------------------------------
export function createPositionInputAndPreview(
  formContainer, previewContainer, 
  inputType, inputId, inputClassName, inputPlaceholder, 
  elementType, elementId, elementClassName ) {
    
  //Create a Employer Name Input 
  const formInput = createAppendInput(inputType, inputId, inputClassName, inputPlaceholder, formContainer);
  // formContainer.appendChild(formInput);

  //Create a Employer Name Preview Element
  const inputPreview = createAppendPreviewElement(elementType, elementId, elementClassName, previewContainer);

  // ---> Listen for the input and add the value to the preview
  formInput.addEventListener("input", () => {
    inputPreview.textContent = ` - ${formInput.value}`;
  })
};

//Connects the Date Inputs to the Date Preview Elements and Updates then accordingly--------------------------------------------------------------------------------------------------
export function createDateInputAndReview(formContainer, datesPreviewContainer, inputType, inputId, inputClassName, inputPlaceholder, elementType, elementId, elementClassName) {
  // Create Employer Start Date Input and adds it to the Job Form Container
  const dateInput = createAppendInput(inputType, inputId, inputClassName, inputPlaceholder, formContainer);

  //Create a Start Date Preview Element and adds it to the Job Dates Preview Container
  const datePreviewElement = createAppendPreviewElement(elementType, elementId, elementClassName, datesPreviewContainer);

  const dateSeparator = document.createElement('p');
  datesPreviewContainer.appendChild(dateSeparator);

  // ---> Listen for the input and add it to the preview
  dateInput.addEventListener("input", () => {
    //Converts the date format
    const dateValue = dateInput.value;// e.g., "2010-06"
    if (dateValue) {
      const [year, month] = dateValue.split("-");
      const date = new Date(year, month - 1); // Month is zero-based
      const options = { year: "numeric", month: "long" };
      datePreviewElement.textContent = date.toLocaleDateString("en-US", options);// e.g. June 2010
      // dateSeparator.textContent = "to";

    } else {
      datePreviewElement.textContent = "";
    }
  })
};


//Connects the Date Inputs to the Date Preview Elements and Updates then accordingly--------------------------------------------------------------------------------------------------
export function createEndDateInputAndReview(formContainer, datesPreviewContainer, inputType, inputId, inputClassName, inputPlaceholder, elementType, elementId, elementClassName) {
  // Create Employer Start Date Input and adds it to the Job Form Container
  const dateInput = createAppendInput(inputType, inputId, inputClassName, inputPlaceholder, formContainer);

   const dateSeparator = document.createElement('p');
  datesPreviewContainer.appendChild(dateSeparator);

  //Create a Start Date Preview Element and adds it to the Job Dates Preview Container
  const datePreviewElement = createAppendPreviewElement(elementType, elementId, elementClassName, datesPreviewContainer);


  // ---> Listen for the input and add it to the preview
  dateInput.addEventListener("input", () => {
    //Converts the date format
    const dateValue = dateInput.value;// e.g., "2010-06"
    if (dateValue) {
      const [year, month] = dateValue.split("-");
      const date = new Date(year, month - 1); // Month is zero-based
      const options = { year: "numeric", month: "long" };
      dateSeparator.textContent = "to";
      datePreviewElement.textContent = date.toLocaleDateString("en-US", options);// e.g. June 2010
      

    } else {
      datePreviewElement.textContent = "";
    }
  })
};