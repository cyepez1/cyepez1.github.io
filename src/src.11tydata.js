// Directory data for all pages under src/: preserve the site's original
// flat-file URLs exactly (photos.html stays /photos.html, etc.).
module.exports = {
  eleventyComputed: {
    permalink: (data) => `${data.page.filePathStem}.html`,
  },
};
