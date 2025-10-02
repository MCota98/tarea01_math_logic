//Segunda sección 
// A conAnuación, se presentan ejercicios los cuales deberá resolver uAlizando el lenguaje JavaScript
// uAlizando NodeJS.
// Ejercicio 1: Sistema de Evaluación de Riesgo
// Cree una función que evalúe el nivel de riesgo de un cliente bancario basado en varios factores.
// • Defina la función evaluateRisk(income, hasLoans, latePayments, isStudent):
// o Un cliente es considerado de alto riesgo si:
// § Tiene ingresos menores a $20,000 y más de 3 pagos atrasados.
//  O Aene préstamos acAvos y es estudiante. o Un cliente es considerado de riesgo moderado si:
//§ Tiene ingresos entre $20,000 y $50,000, y no Aene más de 2 pagos atrasados.
//§ O si Aene préstamos pero no es estudiante. o Si no cumple ninguna de estas condiciones, se considera de bajo riesgo.
//• Retorne el nivel de riesgo como un string: 'High', 'Moderate' o 'Low'.
//• Por ejemplo, el uso de la función sería: 

console.log(evaluateRisk(15000, true, 4, true)); // "High"

//TAREA 01

// Definición de la función evaluateRisk
function evaluateRisk(income, hasLoans, latePayments, isStudent) {
  // Condición para Alto Riesgo
  if ((income < 20000 && latePayments > 3) || (hasLoans && isStudent)) {
    return "High";
  }
  // Condición para Riesgo Moderado
  else if (
    (income >= 20000 && income <= 50000 && latePayments <= 2) ||
    (hasLoans && !isStudent)
  ) {
    return "Moderate";
  }
  // Condición por defecto: Bajo Riesgo
  else {
    return "Low";
  }
}

// Pruebas de la función
console.log(evaluateRisk(12500, true, 4, true)); // High
console.log(evaluateRisk(35000, false, 1, false)); // Moderate
console.log(evaluateRisk(62500, false, 0, false)); // Low
console.log(evaluateRisk(18000, true, 2, true)); // High
console.log(evaluateRisk(44000, true, 3, false)); // Moderate

console.log(evaluateRisk(22500, false, 3, true)); // Low
