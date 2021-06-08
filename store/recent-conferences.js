const recentConferences = [
  {
    title: "Machine Learning and its Applications in Food Engineering",
    desc: "Update NOW 2020 Conference",
    confImg: "./img/unow.jpg",
  },
 
  {
    title: "update",
    desc: "lorem ipsum dolor sit",
    confImg:
      "https://images.unsplash.com/photo-1623009070533-593d7b6fc383?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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

function getConferenceBlock(title, confImg) {
  return `
  <div class="col-md-12">
    <div class="post-box">
      <div id="conferenceblock">
        <blockquote class="blockquote">
          <p class="mb-0"><b>${title}</b></p>
        </blockquote>
        <div class="article-content">
          <img class="conferenceblock-img" src="${confImg}" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>`;
}

x = document.getElementById("conf-box-container");
x.innerHTML = recentConferences
  .reverse()
  .filter((item, idx) => idx < 4)
  .map((rconf) =>
    getRecentConferenceCard(rconf.title, rconf.desc, rconf.confImg)
  )
  .join("");
