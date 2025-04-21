const getCardWithThumb = (title, desc, img) => {
  return `
    <div class="card mb-4 shadow-sm">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="${img}" class="img-fluid h-100 w-100 object-fit-cover" alt="${title}" style="object-fit: cover; height: 100%;">
        </div>
        <div class="col-md-6 d-flex align-items-center">
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
    <div class="col-12 mb-4">
      <div class="post-box p-4 border rounded shadow-sm">
        <blockquote class="blockquote mb-2">
          <p class="mb-0 font-weight-bold">${title}</p>
        </blockquote>
        <p class="conf-box-desc mb-0">${desc}</p>
      </div>
    </div>`;
};

const getBlockWithImage = (title, desc, img) => {
  return `
    <div class="col-12 mb-4">
      <div class="post-box p-4 border rounded shadow-sm">
        <blockquote class="blockquote mb-2">
          <p class="mb-0 font-weight-bold">${title}</p>
          <p class="conf-box-desc mb-0">${desc}</p>
        </blockquote>
        <div class="article-content mt-3">
          <img class="img-fluid rounded" src="${img}" alt="${title}">
        </div>
      </div>
    </div>`;
};

const getRecentWorkList = (title, desc) => {
  return `
    <div class="card bg-light mb-4 shadow-sm">
      <div class="card-header font-weight-bold">
        ${title}
      </div>
      <div class="card-body">
        <p class="card-text">${desc}</p>
      </div>
    </div>`;
};

// Export functions for use
export {
  getBlockWithImage,
  getCardWithThumb,
  getRecentWorkList,
  getBlockWithoutImage,
};

