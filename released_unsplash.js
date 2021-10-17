function dropIStockSections() {
  const iStockIdentificationPattern = 'Browse premium images on iStock';
  const headings = document.evaluate(`//h2[contains(., '${iStockIdentificationPattern}')]`, document, null, XPathResult.ANY_TYPE, null);

  const sections = [];

  let heading;
  while (heading = headings.iterateNext()) {
    const section = heading.closest('div');
    sections.push(section);
  }

  for (const section of sections) {
    section.style.display = "none";
  }
}

dropIStockSections();
