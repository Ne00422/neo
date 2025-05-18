// Début du script

function highlight(id) {
  const element = document.getElementById(id);
  if (element) {
    element.classList.add("highlight");
    setTimeout(() => {
      element.classList.remove("highlight");
    }, 2000);
  }
}
