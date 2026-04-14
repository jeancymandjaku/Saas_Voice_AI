import {getCompanion} from '@/lib/actions/companion.actions';
import {currentUser} from '@clerk/nextjs/server';

interface CompanionSessionPageProps{
  params: Promise<{ id: string}>;
}

// params /url/{id} -id
// searchParams/url?key=valueskey1=value1
const CompanionSession =async  ( { params } : CompanionSessionPageProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  if(!user) redirect('/sign-in');
  if(!companion) redirect('/companions');

  return (
    <main>
    <article className ="flex rounded-border justify-between p-6 max-md:flex-col">
        
    <div className ="flex items-center gap-2">
      <div className="size-[72px] flex item-center justify-center rounded-lg max-md:hidden">

      </div>
    </div>
    </article>
    </main>
  )
}

export default CompanionSession