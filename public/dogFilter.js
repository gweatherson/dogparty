document.addEventListener('DOMContentLoaded', () => {
  const sexFilterElement = document.getElementById('sex-filter');
  const goodFilterElement = document.getElementById('good-filter');

  const applyFilters = () => {
    const sexFilter = sexFilterElement.value;
    const goodFilter = goodFilterElement.value;
    const dogCards = document.querySelectorAll('.cards .card');

    let allHidden = true;

    dogCards.forEach(card => {
      const dogSex = card.getAttribute('data-sex');
      const dogGood = card.getAttribute('data-good');
      const sexMatch = sexFilter === 'all' || dogSex == sexFilter;
      const goodMatch = goodFilter === 'all' || dogGood === goodFilter;

      if(sexMatch && goodMatch) {
        card.style.display = '';
        allHidden = false;
      } else {
        card.style.display = 'none';
      }

      document.getElementById('no-dogs-message').style.display = allHidden ? '' : 'none';
    });
  };

  sexFilterElement.addEventListener('change', applyFilters);
  goodFilterElement.addEventListener('change', applyFilters);
})