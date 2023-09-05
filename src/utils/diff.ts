import { Card, Deck } from "./parser";

export interface DeckDiff {
    toAdd: Deck;
    toRemove: Deck;
}

export function diffDecks(oldDeck: Deck, newDeck: Deck): DeckDiff {
    const mainDiff = diffCardSet(oldDeck.main, newDeck.main);
    const sideboardDiff = diffCardSet(oldDeck.sideboard, newDeck.sideboard);
    return {
        toAdd: new Deck(mainDiff.toAdd, sideboardDiff.toAdd),
        toRemove: new Deck(mainDiff.toRemove, sideboardDiff.toRemove)
    }
}

function diffCardSet(oldDeck: Card[], newDeck: Card[]): { toAdd: Card[], toRemove: Card[] } {
    const oldMap = new Map(oldDeck.map((card) => [card.name, card]));
    const newMap = new Map(newDeck.map((card) => [card.name, card]));

    const toAdd: Card[] = [];
    const toRemove: Card[] = [];

    for (const [name, card] of oldMap) {
        if (!newMap.has(name)) {
            toRemove.push(card);
        }
    }

    for (const [name, card] of newMap) {
        if (!oldMap.has(name)) {
            toAdd.push(card);
        }
    }

    for (const [name, oldCard] of oldMap) {
        if (newMap.has(name)) {
            const newCard = newMap.get(name);
            if (newCard === undefined) continue;
            if (oldCard.count < newCard.count) {
                toAdd.push({name, count: newCard.count - oldCard.count});
            } else if (oldCard.count > newCard.count) {
                toRemove.push({name, count: oldCard.count - newCard.count});
            }
        }
    }

    return {toAdd, toRemove};
}