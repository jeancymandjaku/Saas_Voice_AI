import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  // Define any props you want to pass to the CompanionCard component
    id:string;
    name:string;
    description:string;
    subject:string;
    duration:string;
    color:string;
}

const CompanionCard = ({id,name,description,subject,duration,color}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor:color}}>
        <div className="flex justify-between items-center mb-4">
            <div className="subject-badge">{subject}</div>
            <button className="companion-bookmark">
                <Image src="/icons/bookmark.svg" alt="Logo" width={12.5} height={15} />
            </button>
        </div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="Logo" width={15} height={15} />
            <p className="text-sm">{duration} minutes</p>
        </div>
        <Link href={`/companions/${id}`} className="text-blue-500 hover:underline just
ify-self-end mt-4">
            <button className="btn-primary w-full justify-center">
                Launch Lesson
            </button>
        </Link>
    </article>
  )
}

export default CompanionCard