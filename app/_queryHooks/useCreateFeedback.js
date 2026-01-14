import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "../_lib/actions";

export function useCreateFeedback() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: submitFeedbackAsync,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (newFeedback) => createFeedback(newFeedback),
    onMutate: (newFeedback) => {
      queryClient.setQueryData(["allFeedbacks"], (oldList) => (oldList ? [...oldList, newFeedback] : [newFeedback]));
    },

    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries(["allFeedbacks"]);
      }
    },

    onError: (err) => {},
  });

  return { submitFeedbackAsync, isLoading, error };
}
