export const labelsForPopupModal = {
  creatingLabel: 'Creating a new Todo',
  creatingMsg: 'Your todo was successfully added !',
  deletingLabel: 'Deleting the Todo',
  deletingMsg: 'Your todo was successfully removed !',
} as const;

export const labelsAskModal = {
  askMsg: 'Are you sure you want to delete this todo?',
  btnYes: "Yes, I'm sure",
  btnNo: 'Cancel',
} as const;

export const labelsErrorModal = {
  creatNewTodo: 'Failed to creat a new blog!',
  removeBlog: 'Failed to remove the blog!',
  getTodo: 'Failed to get the todos!',
  closebtn: 'Close',
} as const;
