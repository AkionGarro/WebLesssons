const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  const searchInput = document.getElementById('search-input').value;
  const targetElements = document.getElementsByClassName(searchInput);

  if (targetElements) {
    const targetOffset = targetElements[0].offsetTop;
    const headerOffset = 0;
    console.log(targetOffset);

    window.scrollTo({
      top: targetOffset - headerOffset,
      behavior: 'smooth'
    });

    // Agregar temporalmente la clase "highlighted" a la imagen
    targetElements[0].classList.add('highlighted');

    // Remover la clase "highlighted" después de 2 segundos
    setTimeout(() => {
      targetElements[0].classList.remove('highlighted');
    }, 2000);
    
  }
});




