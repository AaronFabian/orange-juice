import styles from "./Input.module.css";

export default function Input({
    name = "unknown",
    type = "text",
    label = "-",
    value,
    autoFocus,
    setValue,
    disabled = false,

    // style
    focusBorderColor = "focus:border-purple_mood",
    margin = "mt-8 mb-6",
    border = "border-gray-600",
}) {
    return (
        <div className={`relative group ${margin}`}>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white ${border} ${focusBorderColor} focus:outline-none focus:ring-0 peer text-purple_mood`}
                onChange={(e) => setValue?.(e.target.value)}
                placeholder=" "
                autoFocus={autoFocus}
                autoComplete="off"
                disabled={disabled}
                required
            />
            <label
                htmlFor={name}
                className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple_mood_hard peer-focus:text-purpleborder-purple_mood peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>
        </div>
    );
}
