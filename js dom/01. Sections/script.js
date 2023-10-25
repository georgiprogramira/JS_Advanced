function create(words) {
   let container = document.getElementById('content');

   container.addEventListener('click', showParagraph);

   for (const word of words) {
      let divToAdd = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.innerHTML = word;
      divToAdd.appendChild(paragraph);
      paragraph.style.display = 'none';

      container.appendChild(divToAdd);
   }

   function showParagraph(e) {
      if (e.target.parentElement.tagName == 'DIV') {
         e.target.children[0].style.display = 'block';
      }
   }
}