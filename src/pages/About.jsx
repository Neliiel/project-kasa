import AboutBanner from "../components/AboutBanner/aboutbanner";
import Collapse from "../components/Collapse/collapse";
import aboutData from "../data/data.json";


function About () {
    return (
        <main>
            <AboutBanner />
            <div className="collapse">
                {aboutData.map(({aboutTitle, aboutText}) => (
                    <Collapse key={`collapse-${aboutTitle}`} aboutTitle={aboutTitle} aboutText={aboutText} />
                ))}
            </div>
        </main>
    )
}

export default About