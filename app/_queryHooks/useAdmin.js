import { useQuery } from "@tanstack/react-query";
import { getAdminsData } from "../_lib/data-service";

export function useAdmin() {
  const {
    isLoading,
    data: admin,
    error,
  } = useQuery({
    queryKey: ["admins"],
    queryFn: () => getAdminsData,
  });

  return { isLoading, admin, error };
}
