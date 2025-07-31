(() => {
  const uniqueLinks = new Set<string>();
  const allLinks = document.querySelectorAll('#bodyContent a[href^="/wiki/"]');

  allLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.includes(":")) {
      uniqueLinks.add(href);
    }
  });

  console.log("Unique links found:", uniqueLinks.size);
  Array.from(uniqueLinks).forEach((link) => {
    console.log(link);
  });
})();
