if (Math.random() < 0.5) {
  fetch('https://v1.hitokoto.cn')
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        var yiyan = document.getElementById('hitokotoOrjinrishici');
        hitokotoOrjinrishici = data.hitokoto + '<br>' +
            '&nbsp;&nbsp;&nbsp;—' + data.from;
      })
      .catch(function(err) {
        console.error(err);
      })
  var typed = new Typed(
      '#hitokotoOrjinrishici',
      {strings: [hitokotoOrjinrishici], typeSpeed: 100});
} else {
  fetch('https://v2.jinrishici.com/one.json')
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        var gushici = document.getElementById('hitokotoOrjinrishici');
        hitokotoOrjinrishici = data.data.content + '<br>' +
            '&nbsp;&nbsp;&nbsp;' +
            '——' + data.data.dynasty + '·' + data.data.author + '<br>' +
            '《' + data.data.title + '》';
      })
      .catch(function(err) {
        console.error(err);
      })
  var typed = new Typed(
      '#hitokotoOrjinrishici',
      {strings: [hitokotoOrjinrishici], typeSpeed: 100});
}