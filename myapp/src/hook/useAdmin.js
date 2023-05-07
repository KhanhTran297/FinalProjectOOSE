import {
  createAdminAccountAPI,
  createExpertAccountAPI,
  deleteAccountAPI,
  getListAccountAPI,
} from "@/api/admin";
import { useMutation, useQuery } from "react-query";
import useMyToast from "./useMyToast";

function useAdmin() {
  const { useSuccess, useError } = useMyToast();
  const handleCreateExpertAccount = useMutation({
    mutationFn: createExpertAccountAPI,
    onSuccess: (data) => {
      useSuccess("Create Success");
    },
    onError: () => {
      useError("Create Fail");
    },
  });
  const { mutate: handleCreateAdminAccount } = useMutation({
    mutationFn: createAdminAccountAPI,
    onSuccess: (data) => {
      useSuccess("Create Success");
    },
    onError: () => {
      useError("Create Fail");
    },
  });
  const { refetch: handleGetListAccount, data: listAccount } = useQuery({
    queryKey: ["listAccount"],
    queryFn: getListAccountAPI,
    retry: 0,
    enabled: false,
    onSuccess: (respone) => {
      console.log("respone ne", respone);
    },
  });
  // delete Account
  const handleDeleteAccount = useMutation({
    mutationFn: deleteAccountAPI,
    onSuccess: (data) => {
      useSuccess("Delete Success");
    },
    onError: () => {
      useError("Delete Fail");
    },
  });
  return {
    handleCreateAdminAccount,
    handleCreateExpertAccount,
    handleGetListAccount,
    listAccount,
    handleDeleteAccount,
  };
}
export default useAdmin;
