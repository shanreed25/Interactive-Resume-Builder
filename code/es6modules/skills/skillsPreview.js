const allSkillsPreviewList = document.getElementById('all-skills-preview-list');


export function addSkillPreviewULElement(skillCount){
    const skillPreviewLIElement = document.createElement('li');
    skillPreviewLIElement.id = `skills-list-${skillCount}`;
    allSkillsPreviewList.appendChild(skillPreviewLIElement);

    return skillPreviewLIElement;
}