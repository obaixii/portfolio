import Card from "./Card"
import { Title, Scroll, Layout } from "./index"

function Skills() {
    return (
        <Layout id="skills" comp={"projects"}>
        <Title title="Skills" />
            <div className="w-full flex gap-4 justify-center flex-wrap px-8 ">
                <Card type="Frontend" dataAos="fade-up" dataDelayAos="750" />
                <Card type="Backend" dataAos="fade-up" dataDelayAos="1000" />
                <Card type="Others" dataAos="fade-up" dataDelayAos="1250" />
                <Card type="Soft Skills" dataAos="fade-up" dataDelayAos="1500" />
            </div>
        </Layout>
    )
}

export default Skills