// Shared header + tabs, injected on every page.
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  const tabs = [
    ['index.html', '&lt;&gt; Code', ''],
    ['wordsearch.html', 'Word Search', '1'],
    ['ispy.html', 'I Spy', '2'],
    ['pacman.html', 'Pac-Prof', '3'],
    ['404.html', 'Contact', ''],
  ];
  const html = `
  <div class="top">
    <div class="crumb">
      <span>📁</span><a href="index.html">pacheco</a><span class="muted">/</span><b><a href="index.html">definitely-maybe-probably-not-work</a></b>
      <span class="badge">Public</span><span class="spacer"></span>
      <button class="btn" onclick="this.textContent='⭐ Starred (thank you)'">⭐ Star</button>
      <button class="btn" onclick="this.textContent='🍴 Forked (why)'">🍴 Fork</button>
    </div>
    <nav class="tabs">${tabs.map(t => `<a href="${t[0]}" class="${page === t[0] ? 'on' : ''}">${t[1]}${t[2] ? `<span class="count">${t[2]}</span>` : ''}</a>`).join('')}</nav>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', html);
  document.body.insertAdjacentHTML('beforeend', '<footer>© 2026 Totally Real Software, Inc. Not affiliated with any actual code-hosting website. Made with love and poor judgment.</footer>');
})();
