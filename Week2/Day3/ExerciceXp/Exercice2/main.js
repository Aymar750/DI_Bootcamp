const colors = ['blue', 'orange', 'green', 'yellow', 'White'];

const suffixes = ['st', 'nd', 'rd', 'th', 'th'];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
