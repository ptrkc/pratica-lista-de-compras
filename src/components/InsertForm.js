import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function InsertForm({ onAddItem }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = { text };
        const itemsRequest = axios.post(
            `${process.env.REACT_APP_API_URL}/items`,
            newItem
        );
        itemsRequest.then(() => {
            setText("");
            onAddItem();
        });
        itemsRequest.catch(() => {
            alert("Error!");
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Insert a new item..."
            />
        </form>
    );
}

const Input = styled.input`
    width: 400px;
    line-height: 40px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    outline: none;
`;
