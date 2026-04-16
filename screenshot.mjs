import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

await page.goto('file:///Users/joatanrodrigues/Projetos%20Claude%20code%20%20/LaLum%20Tech/index.html', { waitUntil: 'networkidle' });
await new Promise(r => setTimeout(r, 2000));

// Full page screenshot
await page.screenshot({ path: 'screenshots/progress/final-full.png', fullPage: true });

// Hero viewport
await page.screenshot({ path: 'screenshots/progress/01-hero.png' });

// Scroll to services
await page.evaluate(() => document.getElementById('services')?.scrollIntoView());
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: 'screenshots/progress/02-services.png' });

// Scroll to stats
await page.evaluate(() => document.getElementById('stats')?.scrollIntoView());
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: 'screenshots/progress/03-stats.png' });

// Scroll to footer
await page.evaluate(() => document.getElementById('footer')?.scrollIntoView());
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: 'screenshots/progress/04-footer.png' });

await browser.close();
console.log('All screenshots saved!');
