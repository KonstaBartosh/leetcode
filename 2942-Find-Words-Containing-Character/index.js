const findWordsContaining = (words, x) => {
  const result = []

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.includes(x)) {
      result.push(i);
    }
  }

  return result
};
