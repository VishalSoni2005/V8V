import { authClient } from "@/lib/auth-client";
import { useQuery } from "@tanstack/react-query";

export const useSubscription = () => {
  return useQuery({
    queryKey: ["subscription"],
    queryFn: async () => {
      const { data } = await authClient.customer.state();
      return data;
    },
  });
};

export const useHasActiveSubscription = () => {
  const { data: subscriptionData, isLoading, ...rest } = useSubscription();

  const hasActiveSubscription =
    subscriptionData?.activeSubscriptions &&
    subscriptionData.activeSubscriptions.length > 0;

  return { 
    hasActiveSubscription,
    data: subscriptionData,
    isLoading,
    ...rest,
  };
};
