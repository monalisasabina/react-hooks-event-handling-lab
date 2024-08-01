// Code Keypad Component Here

function Keypad (){

    function handleKeypad(event){
        console.log('Entering password...')
        // console.log(`${event.target.value}`)

    }
    return (
        <div>
            <input type="password"
                   onChange={handleKeypad}
                   placeholder="Enter password"

            />

        </div>
    )
}

export default Keypad;