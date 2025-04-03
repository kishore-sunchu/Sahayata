import { Ngo } from '../_common/_types/ngo.type';

const NgoCard = ({ ngo, handleClick }: { ngo: Ngo, handleClick: (id: string) => void }) => {
    // const API_URL = process.env.API_URI;

    return (
        <div className="flex flex-col-reverse md:flex-row bg-white shadow-md rounded-lg overflow-hidden mx-auto my-4 w-4/5" onClick={() => handleClick(ngo._id)}  data-aos='fade-up' data-aos-duration="2000">
            <div className="md:w-2/3 w-full flex flex-col p-4">
                <h2 className="text-xl font-semibold text-gray-800">{ngo.name}</h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {ngo.description}
                </p>
                <div className="mt-4 text-gray-600">
                    <p>
                        <span className="font-medium">State:</span> {ngo.state}
                    </p>
                    <p>
                        <span className="font-medium">City:</span> {ngo.city}
                    </p>
                </div>
                <div className="mt-4 text-gray-600">
                    <p>
                        <span className="font-medium">Email:</span>{' '}
                        <a
                            href={`mailto:${ngo.email}`}
                            className="text-blue-600 hover:underline"
                        >
                            {ngo.email}
                        </a>
                    </p>
                    <p>
                        <span className="font-medium">Phone:</span> {ngo.mobile}
                    </p>
                </div>
            </div>
            <div className="md:w-1/3 w-full h-40 md:h-auto">
                {/* <Image
                    src={`${API_URL}${ngo.imageUrl}`}
                    alt={`${ngo.name} image`}
                    className="w-full h-full object-cover"
                /> */}
            </div>
        </div>
    );
};

export default NgoCard;
