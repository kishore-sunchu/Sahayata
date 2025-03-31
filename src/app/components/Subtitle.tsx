export default function Subtitle({ subtitle }: { subtitle: string }) {
    return (
        <h1 className="text-accent lg:text-2xl md:text-lg mt-2" data-aos='fade-up' data-aos-duration="2000">{subtitle}</h1>
    );
}
