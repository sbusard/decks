export interface Card {
    name: string;
    count: number;
}

export function parseDeck(deck: string): Card[] {
    return deck.split('\n').flatMap((line) => {
        const [countString, ...name] = line.split(' ');
        const count = parseInt(countString);
        if (Number.isNaN(count) || name.length === 0) return [];
        return {count: count, name: name.join(' ')};
    });
}