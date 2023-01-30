
function Input({label, type='text', name, value, placeholder, onChange='handleChange'}) {
    return (
    <div>
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
    );
}

export default Input