import { useQuery } from "@tanstack/react-query";
import { getShipment } from "../_lib/data-service";

export function useShipment(trackingNumber) {
  const {
    isLoading,
    data: shipment,
    error,
  } = useQuery({
    queryKey: ["shipment", trackingNumber],
    queryFn: () => getShipment(trackingNumber),
    enabled: !!trackingNumber,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  return { isLoading, shipment, error };
}
