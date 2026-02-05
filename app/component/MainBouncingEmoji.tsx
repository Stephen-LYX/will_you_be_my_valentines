// Emoji for main page
export function MainBouncingEmoji() {

    return (
        <div>        
            {/* Floating sparkles and hearts */}
            <span className="absolute top-10 left-10 text-4xl animate-bounce">✨</span>
            <span className="absolute top-20 right-20 text-3xl animate-pulse">💖</span>
            <span className="absolute bottom-32 left-32 text-4xl animate-spin">💫</span>
            <span className="absolute top-40 left-[70%] text-3xl animate-bounce delay-100">💕</span>
            <span className="absolute bottom-20 right-32 text-4xl animate-pulse delay-100">✨</span>
            <span className="absolute top-[60%] left-5 text-3xl animate-bounce delay-300">💝</span>
        </div>
    )
} 