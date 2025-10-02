// Definición de la función recommendProduct
function recommendProduct(age, isMember, purchaseHistory) {
  // Condición para recomendar un producto de alta tecnología
  if (
    (isMember && purchaseHistory.tech >= 5) ||
    (age >= 18 && age <= 30 && purchaseHistory.fashion >= 2)
  ) {
    return "High-Tech Product";
  }
  // Condición para recomendar un producto de moda
  else if (
    (!isMember && purchaseHistory.tech + purchaseHistory.fashion + purchaseHistory.other >= 3) ||
    (age >= 25 && age <= 40)
  ) {
    return "Fashion Product";
  }
  // Condición por defecto: producto genérico
  else {
    return "Generic Product";
  }
}

// Pruebas de la función
console.log(recommendProduct(19, true, { tech: 6, fashion: 1, other: 2 })); // "High-Tech Product"
console.log(recommendProduct(31, false, { tech: 1, fashion: 1, other: 1 })); // "Fashion Product"
console.log(recommendProduct(49, false, { tech: 0, fashion: 0, other: 1 })); // "Generic Product"
console.log(recommendProduct(22, true, { tech: 3, fashion: 2, other: 0 })); // "High-Tech Product"
console.log(recommendProduct(33, false, { tech: 2, fashion: 2, other: 0 })); // "Fashion Product"
console.log(recommendProduct(13, true, { tech: 2, fashion: 1, other: 0 })); // "Generic Product"