import { container, DI_TOKENS } from "@liftera/di";
import { getSupabaseClient } from "../services/supabase.service";

export function registerInfrastructure(
  supabaseUrl: string,
  supabaseKey: string,
): void {
  const supabase = getSupabaseClient(supabaseUrl, supabaseKey);

  // Register your infrastructure implementations here
  // Example:
  // container.register(DI_TOKENS.USER_REPOSITORY, {
  //   useFactory: () => new UserRepository(supabase),
  // });
}
