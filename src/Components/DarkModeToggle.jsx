'use client';

import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default DarkModeToggle;
