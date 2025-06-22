import {addContainer} from './form/formInputs.js';
import {allSkillsPreviewList} from './preview/previewElements.js'
import {allSkillsInputsContainer} from './form/skillsInput.js';

import {createInputAndPreview} from './inputPreviewConnection.js'


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