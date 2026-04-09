import { cn } from "@/lib/utils";
import { subjectsColors } from "@/constants";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps{
  title:string;
  companions?:Companion[];
  classNames?:string;
}

const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors] ?? "#d1d5db";
};

const CompanionsList = ({title, companions,classNames} : CompanionsListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="tex-lg w-2/3">Lessons</TableHead>
            <TableHead className="tex-lg">Subject</TableHead>
            <TableHead className="tex-lg text-right ">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {companions?.map(({id,subject,name,description,duration})=>(
              <TableRow key={id}>
                <TableCell>
                  <Link href={`/companions/${id}`}>
                    <div className="flex items-center gap-2">
                      <div className="size-[72]px flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={40} height={40} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl">{name}</p>
                        <p className="text-lg text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="subject-badge w-full max-md:hidden">
                    {subject}
                  </div>
                  <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
                    <Image src={`/icons/${subject}.svg`} alt={subject} width={20} height={20} />
                  </div>
                </TableCell>
                <TableCell> 
                  <div className="flex items-center gap-2 w-full justify-end">
                    <p className="text-2xl">{duration} {''}
                      <span className="max-md:hidden">mins</span>
                    </p>
                    <Image src="/icons/clock.svg" alt="Duration" width={20} height={20} className="md:hidden"/>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionsList