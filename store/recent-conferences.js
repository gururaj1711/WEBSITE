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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLcd-OeOivwg&psig=AOvVaw26OsShtJ2iXf3wExpBkFh9&ust=1623252006777000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCm0JqsiPECFQAAAAAdAAAAABAD",
  },
  {
    title: "ACM DSP Talk",
    desc: "SAGE University, Bhopal",
    confImg:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Fshashank-m-m-36957a17b&psig=AOvVaw34ut_UA8UK_gRqdPNqR7b6&ust=1623252293146000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDbkdisiPECFQAAAAAdAAAAABAD",
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
