const markup = {
  createWidget() {
    return (
      `<div class="widget-wrapper">
          <span class="widget__title">You have <span class="news-amount">0</span> news</span>
          <button class="widget__button" title="view all">View all news</button>
      </div>`
    );
  },

  createNewsWrapper() {
    return (
      `<div class="news-container hide-it">
      </div>`
    );
  },

  createNews(title, date, time, ref, id, author) {
    return (
      `<div class="news-wrapper" key="${id}">
      <h2 class="news__title">${title}</h2>
      <span class="news__date">Public: ${date}, ${time}</span>
      <span class="news__author">From: ${author}</span>
      <a href="${ref}" class="news__ref" target="_blank">See details...</a>
      <div class="news__status">Not viewed</div>
    </div>`
    );
  },
};

export default markup;
