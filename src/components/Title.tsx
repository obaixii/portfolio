type title = {
    title: string
}
function Title({ title }: title) {
    return (
        <h1 className="text-center p-2 text-lg font-[200]"  data-aos="zoom-in" data-aos-delay="300">
            &lt;{title}&#47;&gt;
        </h1>

    )
}

export default Title