if (Math.random() < 0.5) {
  fetch('https://v1.hitokoto.cn')
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        hitokotoOrjinrishici.innerHTML = data.hitokoto + '<br>' +
            '&nbsp;&nbsp;&nbsp;—' + data.from;
        document.getElementById('hitokotoOrjinrishici').value(hitokotoOrjinrishici);
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
        hitokotoOrjinrishici.innerHTML = data.data.content + '<br>' +
            '&nbsp;&nbsp;&nbsp;' +
            '——' + data.data.dynasty + '·' + data.data.author + '<br>' +
            '《' + data.data.title + '》';
            document.getElementById('hitokotoOrjinrishici').value(hitokotoOrjinrishici);
      })
      .catch(function(err) {
        console.error(err);
      })
  var typed = new Typed(
      '#hitokotoOrjinrishici',
      {strings: [hitokotoOrjinrishici], typeSpeed: 100});
}
