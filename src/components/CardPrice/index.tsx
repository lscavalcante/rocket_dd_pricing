
import React from "react";
import { Button } from "../Button";
import styles from './styles.module.scss';


interface ICardPriceProps {
    title: string;
    price: string;
    description: string;
    options?: string[];
    onClickBtn?: () => void;
    isPopular?: boolean;
    transparent?: boolean;

}

export function CardPrice({ title = 'title here', price = 'here', description = 'description here', options = [], isPopular = false, ...props }: ICardPriceProps) {

    return <div className={styles.card_bg}>

        <div className={isPopular? styles.title_popular: styles.title_not_popular}>
            <div className={styles.title_item}>
                <h2>{title}</h2>
            </div>
        </div>

        <div className={styles.card_content}>

            <div className={styles.price}>
                <p>{price}</p>
                <p>/mês</p>
            </div>

            <span>{description}</span>

            <div className={styles.line}></div>
            <div className={styles.card_options}>
                <ul>
                    {options.map((e, index) => {
                        return <li key={index}>
                            <img src="src/assets/check.svg" alt="check-option" />
                            <span>{e}</span>
                        </li>
                    })}
                </ul>
                <Button
                    onClick={props.onClickBtn}
                    title='ASSINAR'
                    transparent={props.transparent}
                />
            </div>
        </div>
    </div>
}