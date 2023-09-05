import React from "react";
import { Deck } from "../utils/parser";
import { CardList } from "./CardList";

export function DeckList(props: { deck: Deck }) {
    return <div>
        <h1 className="font-bold">Main deck</h1>
        <CardList cards={props.deck.main} />
        <h1 className="font-bold">Sideboard</h1>
        <CardList cards={props.deck.sideboard} />
    </div>;
}