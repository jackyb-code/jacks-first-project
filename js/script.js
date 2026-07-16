const CREATIVITY_SCORE = 93;

const ideas = [
  "A toaster that only makes toast shaped like the day of the week.",
  "A to-do list app where tasks disappear if you stare at them too long.",
  "Umbrellas that play tiny thunderclap sound effects for dramatic effect.",
  "A doorbell that answers philosophical questions instead of ringing.",
  "Socks with a built-in 'left foot regret' warning label.",
  "A coffee mug that judges your sleep schedule out loud.",
  "Standing desks that slowly become sitting desks if you overthink it.",
  "A calendar app that reschedules meetings based on your mood ring.",
  "Shoelaces that untie themselves right before important meetings, ironically.",
  "A plant that live-tweets its own photosynthesis.",
];

function animateMeter() {
  const fill = document.getElementById("meterFill");
  const value = document.getElementById("meterValue");
  let current = 0;
  fill.style.width = CREATIVITY_SCORE + "%";
  const step = () => {
    current += 1;
    value.textContent = Math.min(current, CREATIVITY_SCORE) + "%";
    if (current < CREATIVITY_SCORE) requestAnimationFrame(() => setTimeout(step, 12));
  };
  step();
}

function showRandomIdea() {
  const output = document.getElementById("ideaOutput");
  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  output.textContent = "“" + idea + "”";
}

function setCertDate() {
  const el = document.getElementById("certDate");
  const today = new Date();
  el.textContent = "Issued " + today.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  animateMeter();
  setCertDate();
  document.getElementById("ideaBtn").addEventListener("click", showRandomIdea);
});
