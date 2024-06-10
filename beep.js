import { sleep } from "https://js.sabae.cc/sleep.js";

const audioCtx = new AudioContext();

const createOscillator = (type = "sawtooth") => {
  const oscillator = audioCtx.createOscillator();
  oscillator.type = type;
  return oscillator;
};

let obj = null;

export const beep = async (freq, duration, vol = .5) => {
  if (typeof duration == "string") duration = parseFloat(duration);
  if (!obj) {
    const type = "sawtooth";
    obj = {};
    obj.oscillator = createOscillator(type);
    obj.gainNode = audioCtx.createGain();
    obj.oscillator.connect(obj.gainNode);
    obj.gainNode.connect(audioCtx.destination);
    obj.oscillator.start(audioCtx.currentTime);
  }
  if (!freq) {
    obj.gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  } else {
    obj.oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    obj.gainNode.gain.setValueAtTime(vol, audioCtx.currentTime);
    obj.gainNode.gain.setValueAtTime(0, audioCtx.currentTime + duration);
  }
  return sleep(duration * 1000);
};
