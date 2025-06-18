const allSkillsInputContainer = document.getElementById('all-skills-inputs-container');


export function addSkillInputContainer(skillInputCount){
        const skillInputContainer = document.createElement('div');
    skillInputContainer.id = `skill-input-${skillInputCount}-container`;
    skillInputContainer.className = `skill-input-container`;
    allSkillsInputContainer.appendChild(skillInputContainer);

    return skillInputContainer;

}