import {addContainer, addInput} from './form/formInputs.js';
import {createPreviewElement} from './preview/preview.js';
import {allSkillsPreviewList} from './preview/skillsPreview.js'
import {allSkillsInputsContainer} from './form/skillsInput.js';


//Connects the Inputs to the Review Elements and Updates then accordingly--------------------------------------------------------------------------------------------------
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

//SKILLS SECTION - 2-----------------------------------------------------------------------------------------------------

let skillInputCount = 0;
export function addNewSkillInput(buttonName){
  buttonName.addEventListener('click', () => {
    skillInputCount++

    //Skill Input Container
    const skillInputContainer = addContainer(`skill-input-container-${skillInputCount}`, `skill-input-container` );
    allSkillsInputsContainer.appendChild(skillInputContainer);

    createInputAndPreview(
        skillInputContainer, allSkillsPreviewList,
        'text', `skill-input-${skillInputCount}`, 'skill-input', "Skill",
        'li', `skills-list-item-${skillInputCount}`, "skills-list-item" 
    );
  })
}