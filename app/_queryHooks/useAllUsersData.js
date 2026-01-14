import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../_lib/data-service";

export function useAllUsersData() {
  const {
    isLoading,
    data: allUsersData,
    error,
  } = useQuery({
    queryKey: ["allUsersData"],
    queryFn: getAllUsers,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  return { isLoading, allUsersData, error };
}
