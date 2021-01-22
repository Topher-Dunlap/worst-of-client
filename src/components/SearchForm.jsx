import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import {useForm} from "react-hook-form";


export default function Search() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    return (
        <div>
            <form id="search-form">
                <section className="form-section overview-section">
                    <label htmlFor="Search-title">Search</label>
                    <input type="text" name="dream-title" placeholder="Crusty Joes Tavern" required/>
                    <br/>
                    <input type="radio" name="search-type" id="dream-type-double" value="4"
                           className="dream-type-radio"/>
                    <label htmlFor="dream-type-double">
                        <span>Restaraunts</span>
                    </label>

                    <input type="radio" name="search-type" id="dream-type-double" value="4"
                           className="dream-type-radio"/>
                    <label htmlFor="dream-type-double">
                        <span>Bars</span>
                    </label>

                    <input type="radio" name="search-type" id="dream-type-double" value="4"
                           className="dream-type-radio"/>
                    <label htmlFor="dream-type-double">
                        <span>Coffee Shops</span>
                    </label>
                </section>
            </form>


        </div>
    )
}