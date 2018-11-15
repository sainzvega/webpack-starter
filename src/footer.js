import './footer.css';

const makeFooter = footerName => {
  const footerlabel = `Footer: ${footerName}`;
  const footer = document.createElement("footer");

  footer.innerText = footerLabel;
  return footer;
};

export { makeFooter as default };
