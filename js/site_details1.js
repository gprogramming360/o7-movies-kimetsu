const site_url = 'https://demon-slayer.pages.dev';
const site_name = 'Kimetsu 360';
const site_image = 'https://demon-slayer.pages.dev/img/background-1.webp';
const site_logo = 'https://demon-slayer.pages.dev/img/logo.webp';
const keywords = 'demon slayer, hashira, training arc';
const anime_name = 'Demon Slayer';

function createMetadata() {
  const metadata = `
    <title>Read ${anime_name} Manga Chapter ${page} Fully Coloured Online</title>
    <meta name='title' content='Read ${anime_name} Manga Chapter ${page} Fully Coloured Online'>
    <meta name='description' content='Read ${anime_name} Chapter ${page}. You are reading ${anime_name} Chapter ${page} in English. Read ${anime_name} Chapter ${page} of ${anime_name} manga online. Share Online'>
    <meta property='og:image' content='${site_image}'>
    <meta property='og:url' content='${site_url}manga/chapter-${page}.html'>
    <meta property='og:title' content='Read ${anime_name} Manga Chapter ${page} Fully Coloured Online'>
    <meta property='og:description' content='Read ${anime_name} Chapter ${page}. You are reading ${anime_name} Chapter ${page} in English. Read ${anime_name} Chapter ${page} of ${anime_name} manga online. Share Online'>
  `;
  return metadata;
}
