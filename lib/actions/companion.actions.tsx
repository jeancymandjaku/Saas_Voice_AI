'use server';

import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    // Récupérer l'utilisateur connecté
    const { userId: author } = await auth();
    // Créer un client Supabase côté serveur
    const supabase = createSupabaseClient();

    // Insérer les données du compagnon avec l'auteur
    const { data, error } = await supabase.from("companions").insert({ ...formData, author }).select();

    // Gérer les erreurs
    if (error || !data) throw new Error(error?.message || 'Échec de la création du compagnon');

    return data[0];
}