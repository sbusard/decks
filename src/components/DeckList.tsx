import React from "react";
import { Deck } from "../utils/parser";
import { CardList } from "./CardList";
import _ from "lodash";
import { CardListWithSum } from "./CardListWithSum";

export function DeckList(props: { deck: Deck }) {
    if (props.deck.size === 0) return <div className="text-gray-500 italic">No deck</div>;
    else
        return <div>
            <CardListWithSum title="Main deck" cards={props.deck.main} />
            <CardListWithSum title="Sideboard" cards={props.deck.sideboard} />
        </div>;
}