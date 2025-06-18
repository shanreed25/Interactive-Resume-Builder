const allSkillsPreviewList = document.getElementById('all-skills-preview-list');


// Passed down to skills.js
export function addSkillPreviewLIElement(skillCount){
    const skillPreviewLIElement = document.createElement('li');
    skillPreviewLIElement.id = `skills-list-${skillCount}`;
    allSkillsPreviewList.appendChild(skillPreviewLIElement);

    return skillPreviewLIElement;
}