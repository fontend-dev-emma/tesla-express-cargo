import { useQuery } from "@tanstack/react-query";
import { getRoutesByTrackingNumber } from "../_lib/data-service";

export function useAllShipmentsRoutes() {
  const {
    isLoading,
    data: allRoutes,
    error,
  } = useQuery({
    queryKey: ["allRoutes"],
    queryFn: getRoutesByTrackingNumber,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  return { isLoading, allRoutes, error };
}
