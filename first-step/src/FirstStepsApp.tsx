import type { CSSProperties } from "react";

const FirstStepsApp = () => {

    const firstName = "John";
    const lastName = "Doe";
    const favoriteGames = ["Chess", "Monopoly", "Scrabble"];
    const isActive = true;
    const myStyle: CSSProperties = { color: "blue", fontSize: "20px", backgroundColor: "fafafa", borderRadius: "5px", padding: "10px" };
    return (
        <div>
            <h1>Welcome to the First Steps App!</h1>
            <p>This is a simple React application.</p>

            <button onClick={() => alert('Button clicked!')}>Click Me</button>
            <p>This is a simple React application.</p>
            <p>Your name is {firstName} {lastName}</p>
            <h2>Your Favorite Games:</h2>
            <ul>
                {favoriteGames.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
            <p>Your favorite game is {favoriteGames.join(", ")}.</p>
            <p style={myStyle}>User is {isActive ? "active" : "inactive"}</p>
        </div>
    )
}
export default FirstStepsApp