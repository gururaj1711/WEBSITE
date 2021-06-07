const recentConferences = [
  {
    title: "Title 1",
    desc: "description of the work",
    confImg: "./img/unow.jpg",
  },
  {
    title: "Title 2",
    desc: "the work",
    confImg:
      "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Title 3",
    desc: "work description of the ",
    confImg:
      "https://images.unsplash.com/photo-1623038896180-d81dd785a60f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

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
