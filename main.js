function minCost(towers, heights, costs, total = 0) {
  // Register all elements with the same adjacent height. O (n)
  const elements = [];
  for (let i = 0; i < towers; i++) {
    const height = heights[i];
    const prevHeight = heights[i - 1];

    if (i === 0) {
      continue;
    }

    if (prevHeight === height && i !== towers) {
      elements.push({ value: height, cost: costs[i], index: i });
      elements.push({ value: prevHeight, cost: costs[i - 1], index: i - 1 });
    }

    if (i === towers && prevHeight === height) {
      elements.push({ value: height, cost: costs[i], index: i });
    }
  }

  //First lower cost element
  let element = null;
  if (elements.length > 0) {
    element = elements[0]; // O (N) looking for element with the lowest cost.
    for (let i = 0; i < elements.length; i++) {
      const item = elements[i];
      if (item.cost < element.cost) {
        element = item;
      }
    }
    total += element.cost;
    const newHeights = [...heights]; // O (N)
    newHeights[element.index] = newHeights[element.index] + 1;

    return minCost(towers, newHeights, costs, total); // Called O(N) times before reaching base case.
  }

  // The condition does not apply, therefore It should return the total cost of increasing by 1.
  return total;
}

export default minCost;
