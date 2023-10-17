export function orderArray(historial){
    const historialOrdenado = historial.sort((a, b) => {
        // Compara por año primero
        if (a['AÑO'] !== b['AÑO']) {
          return a['AÑO'] - b['AÑO'];
        }
      
        // Compara por mes si los años son iguales
        const meses = [
          'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
          'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
        ];
        const mesA = meses.indexOf(a.MES);
        const mesB = meses.indexOf(b.MES);
        
        if (mesA !== mesB) {
          return mesA - mesB;
        }
      
        // Si los años y meses son iguales, compara por RFC
        return a.RFC_PROVEEDOR.localeCompare(b.RFC_PROVEEDOR);
      });

    return historialOrdenado;
}

export function orderArrayFemco(historial){
  const historialOrdenado = historial.sort((a, b) => {
      // Compara por año primero
      if (a['AÑO'] !== b['AÑO']) {
        return a['AÑO'] - b['AÑO'];
      }
    
      // Compara por mes si los años son iguales
      const meses = [
        'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
        'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
      ];
      const mesA = meses.indexOf(a.MES);
      const mesB = meses.indexOf(b.MES);
      
      if (mesA !== mesB) {
        return mesA - mesB;
      }
    
      // Si los años y meses son iguales, compara por RFC
      a.RFC_PROVEEDOR.localeCompare(b.RFC_PROVEEDOR);
      
      return a.EMPRESA_CONTRATANTE.localeCompare(b.EMPRESA_CONTRATANTE);

    });

  return historialOrdenado;
}

