import React from "react";
import { Card } from "../utils/parser";

export function DeckList(props: { cards: Card[] }) {
    return <ul>
        {props.cards.map((card) => <li key={card.name}>{card.count} {card.name}</li>)}
    </ul>;
}