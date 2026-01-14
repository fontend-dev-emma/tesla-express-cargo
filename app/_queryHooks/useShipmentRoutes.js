import { useQuery } from "@tanstack/react-query";
import { getRoutesByTrackingNumber } from "../_lib/data-service";

export function useShipmentRoutes(trackingNumber) {
  const {
    isLoading,
    data: shipmentRoutes,
    error,
  } = useQuery({
    queryKey: ["shipmentRoutes", trackingNumber],
    queryFn: () => getRoutesByTrackingNumber(trackingNumber),
    enabled: !!trackingNumber,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  return { isLoading, shipmentRoutes, error };
}
