import {addInput} from './formInputs.js';
import {createPreviewElement} from './previewElements.js';


//Connects the Inputs to the Preview Elements and Updates then accordingly--------------------------------------------------------------------------------------------------
export function createInputAndPreview(
  formContainer, previewContainer, 
  inputType, inputId, inputClassName, inputPlaceholder, 
  elementType, elementId, elementClassName ) {
  //Create a Employer Name Input 
  const formInput = addInput(inputType, inputId, inputClassName, inputPlaceholder);
  formContainer.appendChild(formInput);

  //Create a Employer Name Preview Element
  const inputPreview = createPreviewElement(elementType, elementId, elementClassName);
  previewContainer.appendChild(inputPreview);

  // ---> Listen for the input and add the value to the preview
  formInput.addEventListener("input", () => {
    inputPreview.textContent = formInput.value;
  })
};

//Connects the Date Inputs to the Date Preview Elements and Updates then accordingly--------------------------------------------------------------------------------------------------
export function createDateInputAndReview(formContainer, datesPreviewContainer, inputType, inputId, inputClassName, inputPlaceholder, elementType, elementId, elementClassName) {
  // Create Employer Start Date Input and adds it to the Job Form Container
  const dateInput = addInput(inputType, inputId, inputClassName, inputPlaceholder);
  formContainer.appendChild(dateInput);

  //Create a Start Date Preview Element and adds it to the Job Dates Preview Container
  const datePreviewElement = createPreviewElement(elementType, elementId, elementClassName);
  datesPreviewContainer.appendChild(datePreviewElement);

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
      dateSeparator.textContent = "to";

    } else {
      datePreviewElement.textContent = "";
    }
  })
}
