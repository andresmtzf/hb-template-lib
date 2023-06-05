const obtenerIniciales = (primeraPalabra: string, segundaPalabra = primeraPalabra) => {
  return `${primeraPalabra.charAt(0).toUpperCase()}${
    segundaPalabra === primeraPalabra
      ? segundaPalabra.charAt(1).toUpperCase()
      : segundaPalabra.charAt(0).toUpperCase()
  }`
}

export default obtenerIniciales
