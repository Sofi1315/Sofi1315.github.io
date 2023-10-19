function EsNumeroDeLaSuerte(numero) {
    
    if (numero> 0) {
      
  if (numero % 2 === 0 || numero % 3 === 0) {
        // Verificar si el número no es igual a 15
        if (numero == 15) {
          return true; // Es un número de la suerte
        }
      }
    }
    
        }
     
  return false; // No es un número de la suerte

  
  // Ejemplos de uso:
  console.log(EsNumeroDeLaSuerte(6)); // Devuelve true
  console.log(EsNumeroDeLaSuerte(10)); // Devuelve true
  console.log(EsNumeroDeLaSuerte(15)); // Devuelve false
  console.log(EsNumeroDeLaSuerte(7)); // Devuelve false