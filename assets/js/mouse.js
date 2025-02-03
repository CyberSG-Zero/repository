function initCursor() {  
  const links = document.querySelectorAll('a');
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
}