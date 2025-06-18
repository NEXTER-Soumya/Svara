const account = document.querySelector('.account');
const accountMenu = document.querySelector('.account .account-actions');
const community = document.querySelector('.community');
const communityMenu = document.querySelector('.community-menu');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');


document.addEventListener('click', function (e) {
    // If the click was outside the account or the menu, hide the menu
    if (!account.contains(e.target)) {
        accountMenu.classList.remove('show');
    }
});

account.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent document listener from firing on toggle
    accountMenu.classList.toggle('show');
});
// Toggle dropdown menu
community.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent it from triggering document click
    communityMenu.classList.toggle('show');
});

// Keep menu open when switching tabs
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetId = tab.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.style.display = content.id === targetId ? 'block' : 'none';
        });
    });
});

// Close dropdown only when clicking outside
document.addEventListener('click', function (e) {
    if (!community.contains(e.target)) {
        communityMenu.classList.remove('show');
    }
});