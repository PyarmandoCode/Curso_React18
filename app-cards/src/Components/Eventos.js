export default function Button () {
    function handleClik() {
        // let num = 20;
        // let num2 = 40
        // let res = num +num2;
        alert('Pulsastes Click!!');
    }

    return (
        <button onClick={handleClik}>
            Pulsame
        </button>
    )
}

