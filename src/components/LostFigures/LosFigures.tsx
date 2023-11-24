import './LostFigures.scss';
import { Figure } from '../../models';
import { FC } from 'react';

type LostType = {
    title: string,
    lost: Figure[],
}

export const LostFigures:FC<LostType> = ({title,lost}) => {

    return (<section className="lost-container">
        <div className="lost-content">
            <h3 className="lost-title"
                style={{color: title === 'black' ? 'white':'black'}}
            >{ title }</h3>
            <ul className="lost-list">
                {
                   lost.map(item => <li className="lost-list-item"
                                        key={item.id}>
                       <p style={{color: title === 'black' ? 'white':'black'}}>{ item.name }</p>
                       <img src={ item.logo ? item.logo: '' } alt="logo"/>
                   </li>)
                }
            </ul>
        </div>
    </section>)
}