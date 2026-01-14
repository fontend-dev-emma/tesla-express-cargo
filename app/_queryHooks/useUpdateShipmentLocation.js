import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateShipmentLocation } from "../_lib/actions";

export function useUpdateShipmentLocation() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: updateShipmentLocationAsync,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ trackingNumber, newLocation }) => updateShipmentLocation(trackingNumber, newLocation),
    onMutate: async ({ trackingNumber, newLocation }) => {
      queryClient.setQueryData(["shipment", trackingNumber], (oldData) => ({
        ...oldData,
        currentLocation: newLocation,
      }));

      queryClient.setQueryData(["allShipment"], (oldList) => {
        if (!oldList) return [];
        return oldList.map((shipment) => (shipment.trackingNumber === trackingNumber ? { ...shipment, currentLocation: newLocation } : shipment));
      });
    },
    onSuccess: (_, { trackingNumber }) => {
      queryClient.invalidateQueries(["shipment", trackingNumber]);
      queryClient.invalidateQueries(["allShipments"]);
    },
  });

  return { updateShipmentLocationAsync, isLoading, error };
}
