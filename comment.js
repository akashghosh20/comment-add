
// add event button listener 
 document.getElementById('submit-comment').addEventListener('click',function(){
// user comment 
const commentBox = document.getElementById('new-comment');
// new paragraph create
const newComment = document.createElement('p');
newComment.innerText = commentBox.value;

// upore parent er child hisebe append child;
const commentContainer = document.getElementById('comment-container');
commentContainer.appendChild(newComment);

// clean commentBox
commentBox.value = '';
 });