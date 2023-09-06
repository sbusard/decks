import { DeckDiff } from "../utils/diff";
import React from "react";
import { CardListWithSum } from "./CardListWithSum";

export function DeckDiffList(props: { deckDiff: DeckDiff }) {
    return <>
        <div>
            <CardListWithSum title="To remove from main deck" cards={props.deckDiff.toRemove.main} />
            <CardListWithSum title="To remove from sideboard" cards={props.deckDiff.toRemove.sideboard} />
        </div>
        <div>
            <CardListWithSum title="To add to main deck" cards={props.deckDiff.toAdd.main} />
            <CardListWithSum title="To add to sideboard" cards={props.deckDiff.toAdd.sideboard} />
        </div>
    </>
}