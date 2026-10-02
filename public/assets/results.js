/* A session lasts until restart or page reload. Revisits never replace a first answer. */
globalThis.createPracticeSession = function(total) {
  let first = Array(total).fill(null);
  let done = Array(total).fill(false);
  let errors = Array(total).fill(0);
  function practiceVisible(visible) {
    document.querySelectorAll('[data-practice]').forEach(el => { el.hidden = !visible; });
    document.getElementById('result').hidden = visible;
  }
  return {
    record(index, correct) {
      if (!Number.isInteger(index) || index < 0 || index >= total || done[index]) return;
      if (first[index] === null) first[index] = correct;
      if (correct) done[index] = true; else errors[index] += 1;
    },
    get score() { return first.filter(value => value === true).length; },
    get completed() { return done.filter(Boolean).length; },
    get complete() { return done.every(Boolean); },
    mistakes(index) { return errors[index] || 0; },
    nextUnfinished(index) {
      for (let step = 1; step <= total; step++) {
        const candidate = (index + step) % total;
        if (!done[candidate]) return candidate;
      }
      return -1;
    },
    showResult() {
      if (!this.complete) return;
      document.getElementById('resultScore').textContent = `${this.score} av ${total}`;
      const practiced = total - this.score;
      document.getElementById('resultMessage').textContent = practiced === 0
        ? 'Du klarade alla ord direkt. Fint jobbat!'
        : `Du övade vidare på ${practiced} ord och klarade till slut alla. Fint jobbat!`;
      practiceVisible(false);
      document.getElementById('resultTitle').focus();
    },
    reset() {
      first = Array(total).fill(null);
      done = Array(total).fill(false);
      errors = Array(total).fill(0);
      practiceVisible(true);
    }
  };
};
