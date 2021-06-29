
let badges = [];
const urlAPI = `https://teamtreehouse.com/alyssalbailey.json`;
const achievementContainer = document.querySelector(".achievement-container");


// Fetch data from the API 
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.badges)
    .then(displayBadges)
    .catch(err => console.log(err));

function displayBadges(achievementBadge) {
    badges = achievementBadge;

    let badgeHTML = ''; // store the achievement badges HTML

    // loop through each achievement badge and create HTML markup
    badges.forEach(badge => {
        let id = badge.id;
        let name = badge.name;
        let classUrl = badge.url;
        let iconUrl = badge.icon_url;
        let date = badge.earned_date;
        
    //badgeHTML += `
    <div class="row mb-2">
    <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">HTML CSS JAVASCRIPT</strong>
                <h3 class="mb-3">${badge.name}</h3>
                <div class="checkmark-text">
                    <img src="images/checkmark.svg" class="checkmark" alt="checkmark" height="28" width="28">
                    <div class="d-flex flex-column">
                        <p class="text-muted fw-bold m-0">Achieved</p>
                        <p class="mb-1 text-muted">${badge.earned_date}</p> 
                    </div>
                </div>  
            </div>
            <div class="col-auto d-none d-lg-block bg-light p-4">
            <img width="150" height="170" src="${badge.icon_url}" alt="Treehouse Badge Icon">
            </div>
        </div>
    </div>



        `
});

achievementContainer.innerHTML = badgeHTML;

}
