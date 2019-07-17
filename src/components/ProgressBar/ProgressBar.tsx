import React from 'react';
import Bar from 'arui-feather/progress-bar';

const ProgressBar = () => {
    const progress = 50;

    return (
        <div>
            <h2>Компонент прогресс-бара.</h2>
            <Bar percent={ progress } />
        </div>
    )
}

export default ProgressBar;