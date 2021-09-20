export const mapItemsByType = (items) => {
  const results = new Map();
  items.forEach((item) => {
    const type = item.type;
    if (results.has(type)) {
      const currentItems = results.get(type);
      currentItems.push(item);
      results.set(type, currentItems);
    } else {
      const currentItems = [item]
      results.set(type, currentItems);
    }
  });
  return results;
};

