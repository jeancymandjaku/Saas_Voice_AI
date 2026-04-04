import { createClient } from "@supabase/supabase-js";
import {auth} from "@clerk/nextjs/server";

// Fonction pour créer un client Supabase authentifié avec Clerk
export const createSupabaseClient = () =>{ 
    return createClient(
        // URL publique du projet Supabase
        process.env.NEXT_PUBLIC_SUPABASE_URL !,
        // Clé anonyme publique de Supabase
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !,{
            // Fonction pour récupérer le token d'authentification Clerk
            async accessToken(){
                return ((await auth()).getToken())
            }
        }
    )
}
