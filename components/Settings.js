function toggle(that) {
  let item = document.querySelectorAll("#setting-option");
  console.log(item)
  for (var i of item) {
    that.parentElement.classList.toggle("active");
  }
}

function changeTheme(theme) {
  // Create a new link element for the new CSS file
  const newLink = document.createElement('link');
  newLink.rel = 'stylesheet';
  newLink.href = `style-${theme}.css`;
  newLink.id = 'style';

  // Remove the old link element from the DOM
  const oldLink = document.querySelector('#style');
  oldLink.parentNode.removeChild(oldLink);

  // Add the new link element to the head of the document
  document.head.appendChild(newLink);
}
