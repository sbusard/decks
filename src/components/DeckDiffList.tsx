import { DeckDiff } from "../utils/diff";
import React from "react";

export function DeckDiffList(props: { deckDiff: DeckDiff }) {
    return <><div>
        <h1 className="font-bold">To remove</h1>
        <ul className="my-4">
            {props.deckDiff.toRemove.map((card) => <li key={card.name}>{card.count} {card.name}</li>)}
        </ul>
    </div>
        <div>
            <h1 className="font-bold">To add</h1>
            <ul className="my-4">
                {props.deckDiff.toAdd.map((card) => <li key={card.name}>{card.count} {card.name}</li>)}
            </ul>
        </div>
    </>
}