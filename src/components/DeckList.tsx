import React from "react";
import { Deck } from "../utils/parser";
import { CardList } from "./CardList";

export function DeckList(props: { deck: Deck }) {
    if (props.deck.size === 0) return <div className="text-gray-500 italic">No deck</div>;
    else
        return <div>
            <h1 className="font-bold">Main deck</h1>
            <CardList cards={props.deck.main} />
            <h1 className="font-bold">Sideboard</h1>
            <CardList cards={props.deck.sideboard} />
        </div>;
}