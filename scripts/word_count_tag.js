hexo.extend.helper.register('word_count', function() {
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(hexo.public_dir, 'posts_word_count.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return `<div class="word-count">Total words in posts: ${data.posts}</div>`;
  } else {
    return '<div class="word-count">Total words in posts: 0</div>';
  }
});
