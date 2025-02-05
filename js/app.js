// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, /*76*/
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, /*84*/ 
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, /*78*/ 
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, /*67*/ 
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, /*59*/
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, /*70*/
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, /*89*/
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, /*81*/
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, /*37*/
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, /*50*/
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, /*90*/
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 } /*80*/
];

// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.

const inventors1500 = inventors.filter(inv => {
  return inv.year >= 1500 && inv.year < 1600
})

console.log(inventors1500)


// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties.
//    Hint: Each object in the output array should look something like { first: "First Name", last: "Last Name" }
//          where "First Name" is the inventor's first name and "Last Name" is the inventor's last name.

const inventorNames = inventors.map(inv => {
  return { first: inv.first, last: inv.last}
})

console.log(inventorNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, from those born furthest in the past to those born most recently.

inventors.sort((a, b) => {
  return a.year - b.year
})

console.log(inventors)

// Array.prototype.sort()
// 4. Sort the inventors by years lived from shortest to longest-lived.

inventors.sort((a, b) => {
  return (a.passed - a.year) - (b.passed - b.year)
})

console.log(inventors)

// Array.prototype.reduce()
// 5. Find how many years all the inventors lived combined.

const totalYears = inventors.reduce((prev, inv) => {
  return prev + (inv.passed - inv.year)
}, 0)

console.log(totalYears)

const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".

const firstLastPeople = people.map(person => {
  return person.split(', ').reverse().join(' ')
})

console.log(firstLastPeople)

const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint: Return an object where the keys are 'car', 'truck', etc., and the value is the total number of times each data item appears.

const occuranceData = data.reduce((prev, dat) => {
  if (prev[dat]) {
    prev[dat] += 1
  } else {
    prev[dat] = 1
  }

  return prev
}, {})

console.log(occuranceData)

const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Array.prototype.some()
// 8. Check if at least one person is 19 or older.

const devOlderThan19 = devs.some(dev => {
  return 2024 - dev.year >= 19
})

console.log(devOlderThan19)

// Array.prototype.every()
// 9. Check if everyone is 19 or older.

const everyDevOlderThan19 = devs.every(dev => {
  return 2024 - dev.year >= 19
})

console.log(everyDevOlderThan19)

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423.

const findId = comments.find(com => {
  return com.id === 823423
})

console.log(findId)

// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523.

const findCommentIdx = comments.findIndex(com => {
  return com.id === 123523
})

console.log(findCommentIdx)