import React from 'react';



export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>Завантаження...</div>}>
            <Component {...props}/>
        </React.Suspense>
    }
}