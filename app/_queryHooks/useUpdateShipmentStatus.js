import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateShipmentStatus } from "../_lib/actions";

export function useUpdateShipmentStatus() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: updateShipmentStatusAsync,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ trackingNumber, newStatus }) => updateShipmentStatus(trackingNumber, newStatus),
    onMutate: async ({ trackingNumber, newStatus }) => {
      queryClient.setQueryData(["shipment", trackingNumber], (oldData) => ({
        ...oldData,
        status: newStatus,
      }));

      queryClient.setQueryData(["allShipment"], (oldList) => {
        if (!oldList) return [];
        return oldList.map((shipment) => (shipment.trackingNumber === trackingNumber ? { ...shipment, status: newStatus } : shipment));
      });
    },
    onSuccess: (_, { trackingNumber }) => {
      queryClient.invalidateQueries(["shipment", trackingNumber]);
      queryClient.invalidateQueries(["allShipments"]);
    },
  });

  return { updateShipmentStatusAsync, isLoading, error };
}
