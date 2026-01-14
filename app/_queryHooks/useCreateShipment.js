import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createShipment } from "../_lib/actions";

export function useCreateShipment() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: submitShipmentAsync,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (newShipment) => createShipment(newShipment),
    onMutate: (newShipment) => {
      queryClient.setQueryData(["allShipments"], (oldList) => (oldList ? [...oldList, newShipment] : [newShipment]));
    },

    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries(["allShipments"]);
      }
    },

    onError: (err) => {},
  });

  return { submitShipmentAsync, isLoading, error };
}
