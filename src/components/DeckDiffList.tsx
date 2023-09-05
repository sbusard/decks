import { DeckDiff } from "../utils/diff";
import React from "react";
import { CardList } from "./CardList";

export function DeckDiffList(props: { deckDiff: DeckDiff }) {
    return <>
        <div>
            <h1 className="font-bold">To remove from main deck</h1>
            <CardList cards={props.deckDiff.toRemove.main} />
            <h1 className="font-bold">To remove from sideboard</h1>
            <CardList cards={props.deckDiff.toRemove.sideboard} />
        </div>
        <div>
            <h1 className="font-bold">To add to main deck</h1>
            <CardList cards={props.deckDiff.toAdd.main} />
            <h1 className="font-bold">To add to sideboard</h1>
            <CardList cards={props.deckDiff.toAdd.sideboard} />
        </div>
    </>
}