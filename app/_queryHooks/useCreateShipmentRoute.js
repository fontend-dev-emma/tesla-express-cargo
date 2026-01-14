import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewRoute } from "../_lib/actions";

export function useCreateShipmentRoute(trackingNumber) {
  const queryClient = useQueryClient();

  const {
    mutateAsync: submitRouteAsync,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (newRoute) => createNewRoute(newRoute),
    onMutate: (newRoute) => {
      queryClient.setQueryData(["shipmentRoutes", trackingNumber], (oldList) => (oldList ? [...oldList, newRoute] : [newRoute]));

      queryClient.setQueryData(["allRoutes"], (oldList) => (oldList ? [...oldList, newRoute] : [newRoute]));
    },

    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries(["shipmentRoutes", trackingNumber]);
        queryClient.invalidateQueries(["allRoutes"]);
      }
    },

    onError: (err) => {},
  });

  return { submitRouteAsync, isLoading, error };
}
