export function formatearPrecio(precio){
    const options = {
        style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    }

    const precioFormateado = precio.toLocaleString('es-ES', options)
    return precioFormateado
}