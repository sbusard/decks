import React from "react";
import { PasteDeckArea } from "../components/PasteDeckArea";
import { DeckList } from "../components/DeckList";
import { parseDeck } from "../utils/parser";
import { diffDecks } from "../utils/diff";
import { DeckDiffList } from "../components/DeckDiffList";

export function DeckTransform() {
    const [deckString1, setDeckString1] = React.useState<string>("");
    const [deckString2, setDeckString2] = React.useState<string>("");
    const deck1 = parseDeck(deckString1);
    const deck2 = parseDeck(deckString2);
    const deckDiff = diffDecks(deck1, deck2);
    return <div className="grid grid-cols-2 gap-4 min-h-0 min-w-0 max-w-[820px] mx-auto m-4">
        <PasteDeckArea onPaste={setDeckString1} />
        <PasteDeckArea onPaste={setDeckString2} />
        <DeckList deck={deck1} />
        <DeckList deck={deck2} />
        {deck1.size > 0 && deck2.size > 0 ? <DeckDiffList deckDiff={deckDiff} /> : <div>Paste two decks to display the differences</div>}
    </div>;
}