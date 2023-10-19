export function orderArray(historial){
    const historialOrdenado = historial.sort((a, b) => {
        if (a['AÑO'] !== b['AÑO']) {
          return a['AÑO'] - b['AÑO'];
        }
      
        const meses = [
          'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
          'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
        ];
        const mesA = meses.indexOf(a.MES);
        const mesB = meses.indexOf(b.MES);
        
        if (mesA !== mesB) {
          return mesA - mesB;
        }
      
        return a.RFC_PROVEEDOR.localeCompare(b.RFC_PROVEEDOR);
      });

    return historialOrdenado;
}

export function orderArrayFemco(historial){
  const historialOrdenado = historial.sort((a, b) => {
      if (a['AÑO'] !== b['AÑO']) {
        return a['AÑO'] - b['AÑO'];
      }
    
      const meses = [
        'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
        'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
      ];
      const mesA = meses.indexOf(a.MES);
      const mesB = meses.indexOf(b.MES);
      
      if (mesA !== mesB) {
        return mesA - mesB;
      }
    
      a.RFC_PROVEEDOR.localeCompare(b.RFC_PROVEEDOR);
      
      return a.EMPRESA_CONTRATANTE.localeCompare(b.EMPRESA_CONTRATANTE);

    });

  return historialOrdenado;
}

