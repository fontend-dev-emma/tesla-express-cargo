import { useQuery } from "@tanstack/react-query";
import { getAllCompanySettings } from "../_lib/data-service";

export function UseAllCompanySettings() {
  const {
    isLoading,
    data: allSettings,
    error,
  } = useQuery({
    queryKey: ["allSettings"],
    queryFn: getAllCompanySettings,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  return { isLoading, allSettings, error };
}
