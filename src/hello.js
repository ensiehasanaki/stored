import React, { useState } from "react";

export default function Storetxt() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [state, setstate] = useState();

    const onchangeName = (event) => {
        setName(event.target.value);
    };

    const onchangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const save = () => {
        const user = { name: name, email: email };
        window.localStorage.setItem("message", JSON.stringify(user));
    };

    const show = () => {
        const item = window.localStorage.getItem("message");
        setstate(item);
    };

    return (
        <div>
            <div>
                <input value={email} onChange={onchangeEmail} />
                <br />
                <input value={name} onChange={onchangeName} />
                <br />
                <button onClick={save}>save</button>
                <button onClick={show}>show</button>
            </div>

            <div id="show">{state}</div>
        </div>
    );
}
