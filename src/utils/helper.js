function multiplyDataByType(data, input, type) {
  return data.map(function (entry) {
    if (entry.type === type) {
      return {
        ...entry,
        value: entry.value * input,
      };
    }
    return entry;
  });
}

export { multiplyDataByType };
