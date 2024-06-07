import React from 'react';

const Avatar = ({ src, alt, name, email, className = '' }) => {
    return (
        <div className={`flex items-center space-x-4 ${className}`}>
            <img src={src} alt={alt} className="w-24 h-24 rounded-full border-2 border-gray-300" />
            <div>
                <h1 className="text-xl font-semibold text-gray-700">{name}</h1>
                <p className="text-gray-500">{email}</p>
            </div>
        </div>
    );
};

export default Avatar;