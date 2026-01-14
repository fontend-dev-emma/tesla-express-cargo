import { useQuery } from "@tanstack/react-query";
import { getAllShipments } from "../_lib/data-service";

export function useAllShipments() {
  const {
    isLoading,
    data: allShipments,
    error,
  } = useQuery({
    queryKey: ["allShipments"],
    queryFn: getAllShipments,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  return { isLoading, allShipments, error };
}
