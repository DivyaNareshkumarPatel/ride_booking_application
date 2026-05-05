import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> { }

export function InputField(props: InputFieldProps) {
    return (
        <input
            {...props}
            className="block w-full px-4 py-3.5 bg-white text-gray-900 text-sm border border-gray-300 rounded-xl placeholder-gray-400 outline-none transition-all duration-200 hover:border-gray-400 focus:border-black focus:ring-1 focus:ring-black"
        />
    );
}