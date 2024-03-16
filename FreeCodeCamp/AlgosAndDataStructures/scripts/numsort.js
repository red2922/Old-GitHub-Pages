const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
  /*This converts the document in to an array of elements*/
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {});
};
