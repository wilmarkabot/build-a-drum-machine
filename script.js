const display = document.getElementById("display");
const powerSwitch = document.getElementById("power");
const volumeSlider = document.getElementById("volume");
const bankSwitch = document.getElementById("bank");
const pads = document.querySelectorAll(".drum-pad");

let powerOn = true;
let currentBank = "heater";

const heaterKit = {
  Q: { name: "Heater 1", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3" },
  W: { name: "Heater 2", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" },
  E: { name: "Heater 3", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3" },
  A: { name: "Heater 4", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3" },
  S: { name: "Clap", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3" },
  D: { name: "Open-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3" },
  Z: { name: "Kick-n'-Hat", src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3" },
  X: { name: "Kick", src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3" },
  C: { name: "Closed-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3" }
};

const pianoKit = {
  Q: { name: "Chord 1", src: "https://cdn.freecodecamp.org/curriculum/drum/Chord_1.mp3" },
  W: { name: "Chord 2", src: "https://cdn.freecodecamp.org/curriculum/drum/Chord_2.mp3" },
  E: { name: "Chord 3", src: "https://cdn.freecodecamp.org/curriculum/drum/Chord_3.mp3" },
  A: { name: "Shaker", src: "https://cdn.freecodecamp.org/curriculum/drum/Give_us_a_light.mp3" },
  S: { name: "Open-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Dry_Ohh.mp3" },
  D: { name: "Closed-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Bld_H1.mp3" },
  Z: { name: "Punchy Kick", src: "https://cdn.freecodecamp.org/curriculum/drum/punchy_kick_1.mp3" },
  X: { name: "Side Stick", src: "https://cdn.freecodecamp.org/curriculum/drum/side_stick_1.mp3" },
  C: { name: "Snare", src: "https://cdn.freecodecamp.org/curriculum/drum/Brk_Snr.mp3" }
};

function playSound(key) {
  if (!powerOn) return;

  const kit = currentBank === "heater" ? heaterKit : pianoKit;
  const sound = kit[key];
  const audio = document.getElementById(key);
  const pad = audio.parentElement;

  audio.src = sound.src;
  audio.volume = volumeSlider.value;
  audio.currentTime = 0;
  audio.play();

  display.textContent = sound.name;
  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 120);
}

// Event Listeners
pads.forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.querySelector(".clip").id;
    playSound(key);
  });
});

document.addEventListener("keydown", e => {
  const key = e.key.toUpperCase();
  if (heaterKit[key]) playSound(key);
});

powerSwitch.addEventListener("change", () => {
  powerOn = powerSwitch.checked;
  display.textContent = powerOn ? "Power: On" : "Power: Off";
});

bankSwitch.addEventListener("change", () => {
  currentBank = bankSwitch.checked ? "piano" : "heater";
  display.textContent = currentBank === "heater" ? "Heater Kit" : "Smooth Piano Kit";
});

volumeSlider.addEventListener("input", () => {
  display.textContent = `Volume: ${Math.round(volumeSlider.value * 100)}`;
});