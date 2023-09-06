import React from "react";
import { Card } from "../utils/parser";
import { CardList } from "./CardList";
import _ from "lodash";

export function CardListWithSum(props: { title: string; cards: Card[] }): JSX.Element {
    return (
        <>
            <h1 className="font-bold">
                {props.title} ({_.sumBy(props.cards, (card) => card.count)})
            </h1>
            <CardList cards={props.cards} />
        </>
    );
}