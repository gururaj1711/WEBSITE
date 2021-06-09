const getCardWithThumb = (title, desc, img) => {
  return `<div class="conf-box">
                    <img class="recent-conf" src="${img}" alt="">
                    <div class="conf-box-details">
                      <h4 class="conf-box-title">${title}</h4>
                      <p class="conf-box-desc">${desc}</p>
                    </div>
                  </div>`;
};

const getBlockWithoutImage = (title, desc) => {
  return `
      <div class="col-md-12">
        <div class="post-box">
          <div id="conferenceblock">
            <blockquote class="blockquote">
              <p class="mb-0"><b>${title}</b></p>
            </blockquote>
            <p class="conf-box-desc">${desc}</p>
          </div>
        </div>
      </div>`;
};

const getBlockWithImage = (title, desc, img) => {
  return `
      <div class="col-md-12">
        <div class="post-box">
          <div id="conferenceblock">
            <blockquote class="blockquote">
              <p class="mb-0"><b>${title}</b></p>
              <p class="conf-box-desc">${desc}</p>
            </blockquote>
            <div class="article-content">
              <img class="conferenceblock-img" src="${img}" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>`;
};

const getRecentWorkList = (title, desc) => {
  return `<div class="work-list" style="margin-top: 1em; margin-bottom: 1em;">
              <h6>${title}</h6>
              <p>${desc}</p>
            </div>`;
};

export {
  getBlockWithImage,
  getCardWithThumb,
  getRecentWorkList,
  getBlockWithoutImage,
};
