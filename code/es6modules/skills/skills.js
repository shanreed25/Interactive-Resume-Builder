import {addSkillInput} from './skillsInputs.js';
import {addSkillPreviewLIElement} from './skillsPreview.js';

export function addSkill(skillInputCount, skillInputContainer){
    //Create Skill Input
     const skillInput = addSkillInput(skillInputCount);
     skillInputContainer.appendChild(skillInput);

     const skillPreviewLIElement = addSkillPreviewLIElement(skillInputCount);

     skillInput.addEventListener('input', () => {
        skillPreviewLIElement.textContent = skillInput.value
        console.log(skillInput.value);
     })

}