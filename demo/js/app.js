import $ from 'jquery';
import Zoom from '../../dist/js/Zoom';

$(function() {

  const imageLightbox = new Zoom('[data-product-image]');

  $(document).on('click', '[data-product-image]', (event) => {
    event.preventDefault();
    imageLightbox.show($(event.currentTarget).index());
  });

});