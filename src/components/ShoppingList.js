import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import InsertForm from "./InsertForm";

export default function ShoppingList() {
    const [items, setItems] = useState([]);

    useEffect(loadItems, []);

    function loadItems() {
        const itemsRequest = axios.get(
            `${process.env.REACT_APP_API_URL}/items`
        );
        itemsRequest.then((response) => {
            setItems(response.data);
        });
        itemsRequest.catch((error) => {
            alert("Error!");
        });
    }

    return (
        <>
            <InsertForm onAddItem={loadItems} />
            <List>
                {items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </List>
        </>
    );
}

const List = styled.ul`
    margin-top: 40px;
    background: #fff;
    width: 600px;
    padding: 20px;
    border-radius: 10px;
    font-size: 25px;
    padding-left: 50px;
    line-height: 40px;
    list-style-type: disc;
`;
