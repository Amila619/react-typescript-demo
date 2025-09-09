type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps){
    const handleCInputChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event);
    
    return <input type="text" value={props.value} onChange={handleCInputChange}/>
}