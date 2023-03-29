export default function Dinamica2() {

    //Funcion que pedira la data del array como argumento y convertira el primer caracter a mayusculas y los campos width y height  los mantendra en usa linea

    const stringifyImageSizes = (imageSizes) => {
        return imageSizes.map((a) => {
            const capitalizedName = a.name[0].toUpperCase() + a.name.slice(1);
            return `${capitalizedName} image - ${a.width} x ${a.height}`;
        });

    }
    //La data que viene desde el celular del inspector
    const imageSizes = [
        { name: "incidencia uno en la Calle 1", width: 600, height: 380 },
        { name: "robo uno en la Calle 2", width: 530, height: 680 },
        { name: "desperfecto uno en la Calle 3", width: 100, height: 280 },
        { name: "asalto uno en la Calle 4", width: 300, height: 280 },
        { name: "trafico uno en la Calle 5", width: 640, height: 180 },
      
    ]

    //Constante que tomara la funcion y pedira el origen de datos
    const normalizedImageStrings = stringifyImageSizes(imageSizes)
    //lo mostrara en el Dom
    return (
        <div className="images">
            {normalizedImageStrings.map((s) => (
                <div className="image-type"> {s}</div>
            )
            )}

        </div>
    );

}