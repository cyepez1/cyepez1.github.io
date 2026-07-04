// 11ty config — cairoyepez.com
// Input: src/ (page templates). Output: _site/ (what GitHub Pages serves).
// CSS/images/CNAME/.nojekyll are passthrough-copied untouched so the built
// site references the same asset paths as before the migration.
module.exports = function (eleventyConfig) {
  // assets, verbatim
  eleventyConfig.addPassthroughCopy({ "tokens.css": "tokens.css" });
  eleventyConfig.addPassthroughCopy({ "style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "games-shared.css": "games-shared.css" });
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ ".nojekyll": ".nojekyll" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
