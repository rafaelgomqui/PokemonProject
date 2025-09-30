import { useState } from 'react'

function GetForm(props: any) {
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');

    const handleFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFrom(e.target.value);
    }

    const handleToInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTo(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.getPokemons(Number(from), Number(to));
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="from-pokemon">From: </label>
                <input
                    type="number"
                    id="from-pokemon"
                    min={1}
                    onChange={handleFromInput}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="to-pokemon">To: </label>
                <input
                    type="number"
                    id="to-pokemon"
                    onChange={handleToInput}
                />
            </fieldset>

            <button>Get Pokemons</button>
        </form>
    )
}

export default GetForm