const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  }

  const validDate = date instanceof Date && !Number.isNaN(date.getTime())
    ? date
    : new Date();

  const result = [];
  const random = seededRandom(validDate.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  return result.length > 0 ? result : ['17:00', '18:30', '20:00'];
}

export function submitAPI(formData) {
  if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
    return window.submitAPI(formData);
  }
  return Boolean(formData);
}