import React from 'react'

export const Previous = () => {
    return (
        <div>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-300/20 group-hover:bg-white/50 dark:group-hover:bg-gray-400/50  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4  text-[#ce3434]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span></div>
    )
}
