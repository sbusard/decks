import { Card } from "./parser";

export interface DeckDiff {
    toAdd: Card[];
    toRemove: Card[];
}

export function diffDecks(oldDeck: Card[], newDeck: Card[]): DeckDiff {
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