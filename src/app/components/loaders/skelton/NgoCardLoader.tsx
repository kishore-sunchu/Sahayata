export default function NgoCardLoader() {
    return (
        <div className="flex flex-col-reverse md:flex-row bg-white shadow-md rounded-lg overflow-hidden mx-auto my-4 w-4/5 animate-pulse">
            {/* Skeleton for NGO Details */}
            <div className="md:w-2/3 w-full flex flex-col p-4 space-y-4">
                {/* Name Skeleton */}
                <div className="h-6 bg-gray-300 rounded-md w-1/2"></div>

                {/* Description Skeleton */}
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-4/6"></div>
                </div>

                {/* Location Skeleton */}
                <div className="space-y-2 mt-4">
                    <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
                </div>

                {/* Contact Skeleton */}
                <div className="space-y-2 mt-4">
                    <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
                </div>
            </div>

            {/* Skeleton for NGO Image */}
            <div className="md:w-1/3 w-full h-40 md:h-auto bg-gray-300"></div>
        </div>
    );
}
