import Widget from './components/widget/Widget.component';
import './sass/style.scss';

window.addEventListener('DOMContentLoaded', () => {
  const widget = new Widget();
  widget.init();
});
