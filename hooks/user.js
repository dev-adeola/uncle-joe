import { useQuery } from '@tanstack/react-query';
import { getCurrentUserId } from '@/lib/user';
import { fetchProfileData, fetchUserDetails } from '@/services/profile';


export const fetchUserProfile = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: fetchProfileData(),
    queryFn: ['userProfile-' + getCurrentUserId()]
  });

  return { data, isError, isLoading }
};

export const fetchUserDetails = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: fetchUserDetails(),
    queryFn: ['userDetails-' + getCurrentUserId()]
  });

  return { data, isError, isLoading }
}