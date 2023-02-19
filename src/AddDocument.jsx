import { useMutation } from "../convex/_generated/react";

async function handleSendMessage(newMessageText, setNewMessageText, event) {
    event.preventDefault();
    setNewMessageText("");
    await sendMessage(newMessageText, name);
  }

export default function populateDocs() {
    // Add markers for local businesses
    const docs = [
        {
            name: 'Stanford Coffee',
            location: [-122.1679, 37.4276],
            product: 'Latte',
            price: '$4.50',
            image: 'https://example.com/latte.jpg',
            email: 'abc@payme.com'
        },
        {
            name: 'Hobee\'s',
            location: [-122.1824, 37.4454],
            product: 'Pancakes',
            price: '$9.99',
            image: 'https://example.com/pancakes.jpg',
            email: 'thing@yo.com'
        },
        // Add more local businesses here
    ];
    useMutation("addDocuments", docs);

    

    // return (
    //     <form onSubmit={(e) => handleSendMessage(newMessageText, setNewMessageText, e)}>
    //     <input
    //         value=""
    //         onChange={event => setNewMessageText(event.target.value)}
    //         placeholder="Write a message…"
    //     />
    //     {/* <input type="submit" value="Send" disabled={!newMessageText} /> */}
    //     </form>
    // )
}