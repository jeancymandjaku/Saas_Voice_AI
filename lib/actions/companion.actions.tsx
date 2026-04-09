'use server';

import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "../supabase";


// Create companion to insert into Supabase database
export const createCompanion = async (formData: CreateCompanion) => {
    // Récupérer l'utilisateur connecté
    const { userId: author } = await auth();
    // Accès supabase client(côté serveur)
    const supabase = createSupabaseClient();

    // Insérer les données du compagnon avec l'auteur dans Supabase DataBase
    const { data, error } = await supabase.from("Companions").insert({ ...formData, author }).select();

    // Gérer les erreurs
    if (error || !data) throw new Error(error?.message || 'Échec de la création du compagnon');

    return data[0];
}

// export const getAllCompanions = async ({limit = 10,page=1,subject,description} : GetAllCompanions)=>{

//     const supabase = createSupabaseClient();

//     let query = supabase.from('companions').select();

//      if (subject && description) {
//     query = query
//       .ilike('subject', `%${subject}%`)
//       .or(`description.ilike.%${description}%,name.ilike.%${description}%`);
//   }  else if(subject){
//         query = query.ilike('subject',`%${subject}%`)
//     }  else if (description) {
//     query = query.or(
//       `description.ilike.%${description}%,name.ilike.%${description}%`
//     );

//     query = query.range((page - 1) * limit, page * limit - 1);

//     const {data:companions,error} = await query;

//     if(error) throw new Error(error.message);

//     return companions;
//     }
// }

export const getAllCompanions = async ({limit=10,page=1,subject,description} : GetAllCompanions)=>{
    const supabase = createSupabaseClient();

    let query= supabase.from("Companions").select();

    if(subject && description) {
        query =query.ilike(' subject',`%${subject}%`).or(`description.ilike.%${description}%, name.ilike.%${description}% `)
    } else if(subject) {
        query = query.ilike('subject',`%${subject}%`);
    } else if(description){
        query = query.or(`description.ilike.%${description}%,name.ilike.%${description}`);
    }

    query =query.range((page - 1) * limit, page * limit - 1);

    const { data : Companions, error} = await query;

    if(error) throw new Error(error.message);

    return Companions;
}