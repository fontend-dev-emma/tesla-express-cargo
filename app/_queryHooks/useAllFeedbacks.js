import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacks } from "../_lib/data-service";

export function useAllFeedbacks() {
  const {
    isLoading,
    data: allFeedbacks,
    error,
  } = useQuery({
    queryKey: ["allFeedbacks"],
    queryFn: getAllFeedbacks,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  return { isLoading, allFeedbacks, error };
}
