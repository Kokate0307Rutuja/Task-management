const state = {
    taskList: [],
};
//DOM.document object
const taskContents = document.querySelector(".task_contents");
const taskModal = document.querySelector(".task__modal__body");
const htmlTaskContent = ({ id, title, description, type, url }) => `
<div class ='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
</div>
`;