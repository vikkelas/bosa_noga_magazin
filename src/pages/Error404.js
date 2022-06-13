import React from 'react';

const Error404 = ({message}) => {
    const errorMsg = message;
    return (
        <section className="top-sales">
            <h2 className="text-center">{errorMsg}</h2>
            <p>
                Извините, такая страница не найдена!
            </p>
        </section>
    );
};

export default Error404;
