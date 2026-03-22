const mediaQueryShow = window.matchMedia('(min-width: 600px)');

function handleWidthChange(event) {
  if (event.matches) {
    navList.classList.remove('hide');
  }
}
// Add the event listener (modern method)
mediaQueryShow.addEventListener('change', handleWidthChange);
// Initial check on load
handleWidthChange(mediaQueryShow);