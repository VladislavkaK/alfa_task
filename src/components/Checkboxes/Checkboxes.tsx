import * as React from 'react';
import { Header } from '../../containers';
import Collapse from 'arui-feather/collapse';
import Paragraph from 'arui-feather/paragraph';
import './styles/style.scss';

const Checkboxes = () => {
    const [isExpanded, setIsExpanded] = React.useState(true);

    const handleExpandedChange = () => {
        setIsExpanded(!isExpanded);
    }

    return (
      <div className="component__checkboxes">
          <Header />
          <main className="main__container" >
              <div>
                  <h2 className="main__container--title" >
                      Collapse
                  </h2>
                  <p>Компонент «подката» позволяет спрятать кусок текста за ссылку «Еще...».</p>
                  <Collapse
                      collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      isExpanded={ isExpanded }
                      onExpandedChange={ handleExpandedChange }
                  >
                      <Paragraph>
                          Альфа-Банк, основанный в 1990 году, является универсальным банком,
                          осуществляющим все основные виды банковских операций, представленных
                          на рынке финансовых услуг, включая обслуживание частных и корпоративных
                          клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
                      </Paragraph>
                  </Collapse>
              </div>
          </main>
      </div>
    )
}

export default Checkboxes;
