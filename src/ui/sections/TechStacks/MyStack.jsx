import TechStack from "./components/TechStack"

export default function MyStack({darkMode}) {
    const bgDark = { backgroundColor: darkMode ? "#262626" : "#F4F4F4" }

    return (
        <section style={bgDark} id="languages" className="my-stack bg-accent" >
            <div className="my-stack-flex-container container">
                <div className="text-center">
                    <h2>These are my <span className="color-accent">technology stacks</span> </h2>
                </div>
                <TechStack/>
            </div>
        </section >
    )
}