const toggleDropdown = () => {
  $('#bar-dropdown').toggleClass('hidden');
};

$(() => $('#bar-dropdown-btn').on('click', toggleDropdown));
