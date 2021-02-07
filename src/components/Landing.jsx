import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import LandingSection from "./LandingSection";
import RegisterForm from "./RegisterForm";
import PasswordReq from "./PasswordReq";
import diveBar from "../images/diveBar.png"
import badRest from "../images/badRest.png"

export default function Landing() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    const sectionMap = sectionData.map((section, idx) =>
        <LandingSection
            key={idx}
            headerContent={section.headerContent}
            pContent={section.pContent}
            sectionImage={section.sectionImage}
        />
    )

    return (
        <section style={theme}>
            <div>
                <span>
                    <h2 style={headerMargin}>Find adventure in any City.</h2>
                </span>
                {sectionMap}
                <section>
                    <header>
                        <h3>Start discovering your low standards today</h3>
                    </header>
                </section>
                <RegisterForm />
                <PasswordReq />
            </div>
        </section>
    )
}

const headerMargin = {
    marginTop: "8rem",
}

const sectionData = [
    {
        headerContent: "Experience the lowest rated places a city has to offer.",
        pContent: `Worst Of helps you discover the lowest rated, restaurants, bars and coffee shops in your area.
                        Have you and your friends found yourselves with nothing to do on a friday night? Now's your
                        chance at rolling the fun dice on finding a new local favorite that you may love to hate!`,
        sectionImage: diveBar,
    },
    {
        headerContent: "Find something to brag about.",
        pContent: `Have your ever struggled to come up with interesting conversation with strangers and acquaintances
                        you meet? How about something to talk about with your co-workers on monday? Worst Of is here to
                        provide you with an unforgettable, mediocre to bad experience you'll love telling everyone
                        about.`,
        sectionImage: badRest,
    }
]
