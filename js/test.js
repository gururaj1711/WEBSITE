import { recentConferences } from "../store/recent-conferences";

function getRecentConferenceCard(title, desc, confImg) {
  return `<div class="conf-box">
                <img class="recent-conf" src="${confImg}" alt="">
                <div class="conf-box-details">
                  <h4 class="conf-box-title">${title}</h4>
                  <p class="conf-box-desc">${desc}</p>
                </div>
              </div>`;
}

x = document.getElementById("conf-box-container");
x.innerHTML = recentConferences
  .filter((item, idx) => idx < 3)
  .map((rconf) =>
    getRecentConferenceCard(rconf.title, rconf.desc, rconf.confImg)
  );

console.log(recentConferences.length);
