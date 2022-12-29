const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();
let secretSocietyName = "";
for (let i = 0; i < names.length; i++) {
  const initial = names[i][0];
  secretSocietyName += initial;
}
console.log(secretSocietyName);
