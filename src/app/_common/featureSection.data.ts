import DonateSvg from "../assets/svgs/donate-heart-svgrepo-com.svg"
import EmpowerNGO from "../assets/svgs/food-svgrepo-com.svg"
import TrackImpact from "../assets/svgs/locate-svgrepo-com.svg"


const cardStyle = 'md:w-[30%] md:w-[32%] w-4/5 xl:h-auto lg:h-[310px] sm:h-[370px] bg-white p-6 rounded-lg shadow-lg hover:shadow-md hover:shadow-primary transition duration-300 group'

export const featureSection = [
    {
        style: cardStyle,
        title: "Simply Food Donations",
        description: "Easily donate surplus food from your restaurant or event in just a few clicks. Our streamlined process ensures your donations reach those in need efficiently.",
        svg: DonateSvg
    },
    {
        style: cardStyle,
        title: "Empower NGOs to Serve",
        description: "Connect with NGOs nearby who can collect and distribute food to communities that need it the most. Empower them to make a bigger impact.",
        svg: EmpowerNGO
    },
    {
        style: cardStyle,
        title: "Track Your Impact",
        description: "Monitor how your donations are making a difference. See real-time updates on the meals served and lives impacted through your contributions.",
        svg: TrackImpact
    }
]