import React from 'react';
import RadioAll from 'arui-feather/radio';

const Radio = () => {
    const radioStyle = {
        display: 'inline-block',
        margin: '0 10px 10px 0'
    };

    return (
        <div>
            <h2>Компонент радио-кнопки.</h2>
            <div>
                <div>
                    {
                        ['m', 'l'].map(size => (
                            <span style={radioStyle} key={size}>
                                <RadioAll
                                    text='Текущий счёт'
                                    size={size}
                                />
                            </span>
                        ))
                    }
                </div>
                <div>
                    {
                        ['m', 'l'].map(size => (
                            <span style={radioStyle} key={size}>
                                <RadioAll
                                    text='Семейный счёт'
                                    size={size}
                                    disabled={true}
                                />
                            </span>
                        ))
                    }
                </div>
                <div>
                    {
                        ['m', 'l'].map(size => (
                            <span style={radioStyle} key={size}>
                                <RadioAll
                                    text='Дополнительный семейный счёт'
                                    size={size}
                                    disabled={true}
                                    checked={true}
                                />
                            </span>
                        ))
                    }
                </div>
                <div>
                    {
                        ['s', 'm', 'l', 'xl'].map(size => (
                            <span style={radioStyle} key={size}>
                                <RadioAll
                                    text='Текущий счёт'
                                    size={size}
                                    type='button'
                                />
                            </span>
                        ))
                    }
                </div>
                <div className='row'>
                    {
                        ['s', 'm', 'l', 'xl'].map(size => (
                            <span style={radioStyle} key={size}>
                                <RadioAll
                                    text='Семейный счёт'
                                    size={size}
                                    type='button'
                                    disabled={true}
                                />
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Radio;