function update(change) {
  var counter = $('#counter');
  var newValue = parseInt(counter.text()) + change;
  counter.text(newValue);
  document.location.hash = '#' + newValue;
}

$(
  function($) {
    if (document.location.hash && document.location.hash.length > 1)  {
      $('#counter').text(parseInt(document.location.hash.substr(1)));
    }

    $('#subtract').on('click', update.bind(null, -1));
    $('#add').on('click', update.bind(null, 1));
  }
)
