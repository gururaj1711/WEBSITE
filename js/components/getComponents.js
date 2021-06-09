const getRecentConferenceCard = (title, desc, confImg) => {
  return `<div class="conf-box">
                    <img class="recent-conf" src="${confImg}" alt="">
                    <div class="conf-box-details">
                      <h4 class="conf-box-title">${title}</h4>
                      <p class="conf-box-desc">${desc}</p>
                    </div>
                  </div>`;
};

const getConferenceBlock = (title, confImg) => {
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
};

const getRecentWorkList = (title, desc) => {
  return `<div class="work-list">
                <h6>${title}</h6>
                <p>${desc}</p>
              </div>`;
};

export { getConferenceBlock, getRecentConferenceCard, getRecentWorkList };
