import styles from "./Input.module.css";

export default function Input({
    name = "unknown",
    type = "text",
    label = "-",
    autoFocus,
    setValue,
    focusBorderColor,
}) {
    return (
        <div className={`relative   mb-6 group mt-8`}>
            <input
                type={type}
                name={name}
                id={name}
                className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 ${
                    focusBorderColor
                        ? focusBorderColor
                        : "focus:border-purple_mood"
                } focus:outline-none focus:ring-0 peer text-purple_mood`}
                onChange={(e) => setValue?.(e.target.value)}
                placeholder=" "
                autoFocus={autoFocus}
                autoComplete="off"
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
