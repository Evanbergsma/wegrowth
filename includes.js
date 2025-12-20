// Function to load HTML components
async function loadComponent(elementId, url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
  }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadComponent('header-placeholder', 'header.html');
  loadComponent('footer-placeholder', 'footer.html');
});
