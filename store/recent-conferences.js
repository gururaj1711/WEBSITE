const recentConferences = [
  {
    title: "Machine Learning and its Applications in Food Engineering",
    desc: "Update-2020, Prague, Europe",
    confImg: "./img/unow.jpg",
  },
  {
    title: "ACM DSP Talk",
    desc: "NIT Surat-2020",
    confImg:
      "https://drive.google.com/file/d/10r2HHKvrhljUFHg6hLK0NpfN79TsdQKt/view?usp=sharing",
  },
  {
    title: "ACM DSP Talk",
    desc: "SAGE University, Bhopal",
    confImg:
      "https://drive.google.com/file/d/1AE68ExZC0ac2rRs-qXcQkBw-8eeshhde/view?usp=sharing",
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
