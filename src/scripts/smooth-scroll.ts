document.addEventListener('DOMContentLoaded', () => {
  // Select all links that have a hash (#) and point to the current page
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Get the full href attribute
      const href = this.getAttribute('href');
      if (!href) return;
      
      // Extract the ID part after the hash
      const targetId = href.split('#')[1];
      
      // If there's no ID or the ID is empty, ignore
      if (!targetId) return;
      
      // Find the element with that ID
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Prevent the default fast-jump behavior
        e.preventDefault();
        
        // Scroll smoothly to the element
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Update the URL hash without triggering a jump
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });
});
