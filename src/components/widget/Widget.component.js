import render from '../helper/render.helper';
import markup from '../markup/widget.markup';
import News from '../news/news.component';

class Widget {
  constructor() {
    this.data = null;
    this.newsAmount = null;
  }

  renderNews() {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        this.newsAmount = data.length;
        this.refreshNewsAmount();
        data.map((it) => {
          const newsOne = new News(it);
          newsOne.init();
        });
      });
  }

  refreshNewsAmount() {
    document.querySelector('.news-amount').innerHTML = this.newsAmount;
  }

  showHandler(e) {
    e.target.classList.toggle('rotate-it');
    document.querySelector('.news-container').classList.toggle('hide-it');
  }

  init() {
    const body = document.querySelector('body');
    render(body, markup.createWidget(this.newsAmount), 'beforeend');
    const widget = body.querySelector('.widget-wrapper');
    render(widget, markup.createNewsWrapper());
    this.renderNews();
    const showButton = widget.querySelector('.widget__button');
    showButton.addEventListener('click', this.showHandler);
  }
}

export default Widget;
