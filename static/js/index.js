// Expandable demonstrations and additional quantitative results.
const labels = {
  "fingertip-visualization": ["Curious to see what the fingertips see?", "Hide fingertip views"],
  userStudySection: ["Explore ablations and generalization", "Hide additional results"],
};
for (const button of document.querySelectorAll("button[aria-controls]")) {
  const id = button.getAttribute("aria-controls");
  const panel = document.getElementById(id);
  if (!panel || !labels[id]) continue;
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expanded));
    panel.hidden = !expanded;
    button.textContent = labels[id][expanded ? 1 : 0];
    for (const video of panel.querySelectorAll("video")) {
      if (expanded) video.play().catch(() => {});
      else video.pause();
    }
  });
}

const copyButton = document.querySelector('[aria-label="Copy BibTeX"]');
copyButton?.addEventListener("click", async () => {
  const status = document.querySelector('#BibTeX [role="status"]');
  try {
    await navigator.clipboard.writeText(document.querySelector("#BibTeX code").textContent);
    status.textContent = "Copied!";
  } catch {
    status.textContent = "Copy failed. Please select and copy the text.";
  }
});
