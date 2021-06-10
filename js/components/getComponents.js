const getCardWithThumb = (title, desc, img) => {
  return `<div class="card mb-3 box-shadow-md" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-6">
                <img src="${img}" width="100%" height="180" alt="...">
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${desc}</p>
                </div>
              </div>
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
  return `<div class="card bg-light mb-3 box-shadow-md" style="max-width: 540px;">
            <h5 class="card-header">${title}</h5>
            <div class="card-body">
              <p class="card-text">${desc}</p>
            </div>
          </div>`;
};

export {
  getBlockWithImage,
  getCardWithThumb,
  getRecentWorkList,
  getBlockWithoutImage,
};
