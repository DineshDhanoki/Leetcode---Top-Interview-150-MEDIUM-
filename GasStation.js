function canCompleteCircuit(gas, cost) {
  let totalGas = 0;
  let currentGas = 0;
  let startingStation = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      startingStation = i + 1;
      currentGas = 0;
    }
  }
  return totalGas >= 0 ? startingStation : -1;
}

const gas1 = [1, 2, 3, 4, 5]; 
const cost1 = [3, 4, 5, 1, 2]; 
console.log(canCompleteCircuit(gas1, cost1));
