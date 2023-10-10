const termCountries = document.querySelector('#termCountries');
const titleCountry = document.querySelector('.term-title-country');
const termCountryHeader = document.querySelector('.term-country-header');
const conditionDefinition = document.querySelector('.past-terms');
const showBtn = document.querySelector('.show-btn');


const selectCountry = () => {
  
  const termValue = termCountries.value;
  titleCountry.innerText = termValue;
  termCountryHeader.innerText = termValue;
}

termCountries.addEventListener('change', selectCountry)

const showDescription = () => {
  conditionDefinition.classList.toggle('show-content');
}

showBtn.addEventListener('click', showDescription);
