interface SubmitButtonProps {
    isPending: boolean;
    loadingText: string;
    text: string;
}

export function SubmitButton({ isPending, loadingText, text }: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center py-3.5 px-4 text-sm font-semibold rounded-xl text-white bg-black outline-none transition-all duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-60 disabled:cursor-not-allowed"
        >
            {isPending ? (
                <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {loadingText}
                </span>
            ) : (
                text
            )}
        </button>
    );
}