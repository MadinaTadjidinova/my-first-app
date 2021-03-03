import { useState } from "react";

function Switch() {
    const [state, setState] = useState(true)

    return (
        <div className="Switch">
            <h1 onClick={() => setState(state = !state ? 'On' : 'Off')}>On</h1>
            <button onClick={() => setState(state)}>Toggle</button>
        </div>
    )
    }

    export default Switch;