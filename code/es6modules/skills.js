import {allSkillsInputsContainer, allSkillsPreviewList} from './functions/getElement.js';

import {createAppendContainer} from './functions/createAppendContainer.js';

import {createInputAndPreview} from './functions/inputPreviewConnection.js'


//SKILLS SECTION - 2-----------------------------------------------------------------------------------------------------

let skillInputCount = 0;
export function addNewSkillInput(buttonName){
  buttonName.addEventListener('click', () => {
    skillInputCount++

    //Skill Input Container
    const skillInputContainer = createAppendContainer(`skill-input-container-${skillInputCount}`, `skill-input-container`, allSkillsInputsContainer );

    createInputAndPreview(
        skillInputContainer, allSkillsPreviewList,
        'text', `skill-input-${skillInputCount}`, 'skill-input', "Skill",
        'li', `skills-list-item-${skillInputCount}`, "skills-list-item" 
    );
  })
}