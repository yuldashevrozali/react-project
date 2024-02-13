export default function Inputs(props) {
    const { label, type, onChange } = props;
    return (
        <>
            <label htmlFor={type}>{label}</label>
            <input onChange={onChange} id={type} placeholder={`${label}ingizni kiriting`} type={type} />
        </>
    );
}
