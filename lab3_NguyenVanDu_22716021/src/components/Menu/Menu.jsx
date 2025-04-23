import { useEffect, useState } from "react";

const data = ['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us']



const Menu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        setMenu(data);
    }, [])

    return (
        <ul>
            {
                menu.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>

    );
}

export default Menu;