export default function Title({ title }: { title: string }) {
    return (
        <h1 className="text-softGray lg:text-5xl md:text-3xl text-xl" data-aos='fade-up' data-aos-duration="2000">{title}</h1>
    );
}
