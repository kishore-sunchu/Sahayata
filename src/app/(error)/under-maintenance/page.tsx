export default function UnderMaintenance(){
    return (
        <main className="bg-softGray min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-MaintenanceBanner">
            <section className="text-center p-8 bg-white/80 backdrop-blur-md shadow-lg rounded-lg max-w-md mx-auto border border-white/30">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    We&apos;ll Be Back Soon!
                </h1>
                <p className="text-darkGray mb-6">
                    Our website is currently under maintenance. We&apos;re working hard to
                    improve your experience. Please check back later!
                </p>
                <p className="text-darkGray text-sm">
                    Thank you for your patience and understanding. If you have urgent
                    queries, please contact us at{" "}
                    <a
                        href="mailto:support@sahayata.com"
                        className="text-primary hover:underline"
                    >
                        support@sahayata.com
                    </a>.
                </p>
            </section>
        </main>
    );
};
