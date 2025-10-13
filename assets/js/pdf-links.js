// 自定義JavaScript，讓PDF連結在新窗口打開
document.addEventListener('DOMContentLoaded', function() {
  // 尋找所有PDF連結並添加target="_blank"
  const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
  pdfLinks.forEach(function(link) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  // 如果有特定的link class，也可以處理
  const linkElements = document.querySelectorAll('.publication-links a');
  linkElements.forEach(function(link) {
    if (link.href.includes('.pdf')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});