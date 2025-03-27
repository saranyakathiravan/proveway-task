window.selectOption = (optionNumber) => {
    document.querySelectorAll('.option').forEach(option => {
        option.classList.toggle('active', option === document.querySelectorAll('.option')[optionNumber - 1]);
        let dropdown = option.querySelector('.dropdowns');
        if (dropdown) dropdown.style.display = option.classList.contains('active') ? 'block' : 'none';
    });
};

document.addEventListener("DOMContentLoaded", () => selectOption(2));
