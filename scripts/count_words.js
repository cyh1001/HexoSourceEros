const fs = require('fs');
const path = require('path');

hexo.extend.filter.register('before_generate', function() {
  // console.log("Starting before_generate filter");

  const posts = hexo.locals.get('posts');
  // console.log(`Number of posts: ${posts.length}`);

  let totalWords = 0;

  posts.forEach(post => {
    // console.log(`Processing post: ${post.title}`);

    // 输出文章内容的前100个字符，帮助调试
    // console.log(`Post content preview: ${post.content.substring(0, 100)}`);
    
    // 移除 Markdown 语法和HTML标签
    let content = post.content.replace(/<[^>]*>/g, ''); // 去除 HTML 标签
    content = content.replace(/!\[.*?\]\(.*?\)/g, ''); // 去除图片
    content = content.replace(/\[.*?\]\(.*?\)/g, ''); // 去除链接
    content = content.replace(/`.*?`/g, ''); // 去除行内代码
    content = content.replace(/```[\s\S]*?```/g, ''); // 去除代码块
    content = content.replace(/[*_\-~>#+=|]/g, ''); // 去除 Markdown 符号
    content = content.replace(/\s+/g, ''); // 去除多余的空白字符
    
    const wordCount = content.length; // 统计中文字符数
    totalWords += wordCount;
    // console.log(`Post title: ${post.title}, Word count: ${wordCount}`);
  });

  const data = {
    posts: totalWords
  };
  // console.log(`Total words in all posts: ${totalWords}`);

  const filePath = path.join(hexo.public_dir, 'posts_word_count.json');
  // console.log(`File path for word count JSON: ${filePath}`);
  
  // Ensure the directory exists
  const dirPath = path.dirname(filePath);
  // console.log(`Directory path for word count JSON: ${dirPath}`);

  if (!fs.existsSync(dirPath)) {
    // console.log("Directory does not exist. Creating directory...");
    fs.mkdirSync(dirPath, { recursive: true });
    // console.log("Directory created.");
  } else {
    // console.log("Directory already exists.");
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  // console.log(`Data written to ${filePath}: ${JSON.stringify(data, null, 2)}`);

  // console.log(`Total words in posts: ${totalWords}`);
});
