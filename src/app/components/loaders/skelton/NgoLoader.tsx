export default function NgoLoader() {
    return (
        <main className="min-h-screen py-10 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
                {/* Skeleton Image */}
                <div className="flex justify-center mb-8">
                    <div className="w-full max-w-md h-48 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>

                <div className="mb-4">
                    <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                </div>
                <div className="mb-6">
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 mt-2 animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                        <ul className="mt-2 space-y-2">
                            <li className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></li>
                            <li className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></li>
                            <li className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></li>
                        </ul>
                    </div>

                    {/* Skeleton for Address */}
                    <div>
                        <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                        <ul className="mt-2 space-y-2">
                            <li className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></li>
                            <li className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></li>
                            <li className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
                </div>
            </div>
        </main>

    );
}
