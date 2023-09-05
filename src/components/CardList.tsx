import React from "react";
import { Card } from "../utils/parser";

export function CardList(props: { cards: Card[] }): JSX.Element {
    if (props.cards.length === 0) return <div className="text-gray-500 italic">No cards</div>;
    else return <ul className="my-4">
        {props.cards.map((card) => <li key={card.name}>{card.count} {card.name}</li>)}
    </ul>
}