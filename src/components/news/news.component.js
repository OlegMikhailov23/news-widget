import markup from '../markup/widget.markup';
import render from '../helper/render.helper';

class News {
  constructor(data) {
    this.data = data;
    this.title = '';
    this.date = '';
    this.ref = '';
    this.id = '';
    this.isRead = false;
  }

  statusHandler(e) {
    this.isRead = true;
    const status = e.target.nextElementSibling;
    status.innerHTML = 'Already viewed';
  }

  init() {
    const {
      title, date, time, ref, _id, author,
    } = this.data;
    const newsContainer = document.querySelector('.news-container');
    render(newsContainer, markup.createNews(title, date, time, ref, _id, author));
    const refLinkCollection = document.querySelectorAll('.news__ref');
    refLinkCollection.forEach((link) => link.addEventListener('click', this.statusHandler));
  }
}

export default News;
