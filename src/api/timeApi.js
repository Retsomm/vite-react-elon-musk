import cron from 'node-cron';
import scrapeNews from './newsApi.js';

cron.schedule('0 6 * * *', () => {
  console.log('⏰ 每日 6 點開始抓取新聞...');
  scrapeNews();
}, {
  timezone: "Asia/Taipei"
});
