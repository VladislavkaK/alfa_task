import * as React from 'react';
import { Header } from '../../containers';
import Amount from 'arui-feather/amount';
import Attach from 'arui-feather/attach';
import Button from 'arui-feather/button';

import './styles/style.scss';

const Buttons = () => {

  const AMOUNT = {
      value: 123535,
      currency: {
          code: 'RUR',
          minority: 100
      }
  };

  const buttons = [
    { size: 'xl', name: 'Оплатить' },
    { size: 'l', name: 'Оплатить' },
    { size: 'm', name: 'Оплатить' },
    { size: 's', name: 'Оплатить' }
  ];

  return (
    <div className="component__buttons">
        <Header />
        <main className="main__container" >
            <div>
              <h2 className="main__container--title" >
                  Amount
              </h2>
              <p>Компонент для отображения суммы, согласно следующему гайдлайну: https://design.alfabank.ru/patterns/amount</p>
              <div>
                {
                    ['s', 'm', 'l', 'xl'].map((size: any, index) => {
                        
                        return (
                            <div key={ size }>
                                <Amount
                                    size={size}
                                    amount={ AMOUNT }
                                />
                            </div>
                        )
                    })
                }
              </div>
              <h2 className="main__container--title" >
                  Atach
              </h2>
              <p>Компонент прикрепления файлов.</p>
              <div>
                  {
                      ['s', 'm', 'l', 'xl'].map((size: any, index) => (
                          <div className='row' key={ size }>
                              <div className='column'>
                                  <Attach size={ size } noFileText='' />
                              </div>
                              <div className='column'>
                                  <Attach size={ size } noFileText='' disabled={ true } />
                              </div>
                          </div>
                      ))
                  }
              </div>
              <h2 className="main__container--title" >Button</h2>
              <p>Компонент кнопки.</p>  
              <div>
                <div className='row'>
                  {
                      buttons.map((value: any, index) => {
                            const { size, name } = value;
                            return (
                                <div className='column' key={ size }>
                                    <Button view='extra' size={ size }>{ `${name}` }</Button>
                                </div>
                            )
                      })
                  }
                </div>
                <div className='row'>
                    
                </div>
              </div>  
            </div>
            <div></div>
        </main>
    </div>
  )
}

export default Buttons;
