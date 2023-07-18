export default function Checkbox({ text, padding }) {
    return (
        <div
            className={`flex items-center justify-end gap-2 ${
                padding ? padding : "py-6"
            } me-auto`}
        >
            <input
                type="checkbox"
                className="accent-purple_mood text-purple_mood focus:ring focus:ring-purple_mood_hard bg-stone-50"
                id="remember_me_checkbox"
            />
            <label className="text-stone-500" htmlFor="remember_me_checkbox">
                {text}
            </label>
        </div>
    );
}
