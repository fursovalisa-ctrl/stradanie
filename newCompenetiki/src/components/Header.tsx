import React from 'react';

interface HeaderProps {
    children: string;
}

export function Header({ children }: HeaderProps) {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    );
}
