// import CompanionCard from "@/components/CompanionCard";
// import { getAllCompanions } from "@/lib/actions/companion.actions";

import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.actions";

// // Typage correct pour Next.js App Router
// type SearchParams = {
//   searchParams?: {
//     subject?: string;
//     description?: string;
//   };
// };

// const CompanionLibrary = async ({ searchParams }: SearchParams) => {
//   const subject = searchParams?.subject ?? "";
//   const description = searchParams?.description ?? "";

//   const companions = await getAllCompanions({ subject, description });

//   return (
//     <main>
//       <section className="flex justify-between gap-4 max-sm:flex-col">
//         <h1>Companion Library</h1>
//         <div className="flex gap-4">Filters</div>
//       </section>

//       <section className="companion-grid">
//         {companions?.map((companion: any) => (
//           <CompanionCard
//             key={companion.id}
//             {...companion}
//           />
//         ))}
//       </section>
//     </main>
//   );
// };

// export default CompanionLibrary;



const CompanionsLibrary = async({searchParams} : SearchParams) => {
    const filters = await searchParams;
    const subject = filters.subject? filters.subject : '';
    const description = filters.description ? filters.description : '';

    // console.log(filters);
    const companions = await getAllCompanions({subject,description})
    function getSubjectColor(subject: any): string {
        throw new Error("Function not implemented.");
    }

  return (
        <main className="flex justify-between gap-4 max-sm:flex-col">
            <h1>Companion Library</h1>
            <div className="flex gap-4">
                {/* Filters */}
                <SearchInput />
                <SubjectFilter />
            </div>
            <section className="companion-grid">
                {companions.map((companion) =>(
                    // <CompanionCard  id name description duration color/>
                    <CompanionCard  key={companion.id} {...companion} />
                    // <CompanionCard  key={companion.id} {...companion} color={getSubjectColor(companion.subject)}/>

                ))}
            </section>
        </main>
  )
}

export default CompanionsLibrary