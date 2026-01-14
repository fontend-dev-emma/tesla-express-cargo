import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../_lib/data-service";

export function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
    suspense: true,
  });

  return { isLoading, settings, error };
}
