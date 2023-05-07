import {
  createAdminAccountAPI,
  createExpertAccountAPI,
  deleteAccountAPI,
  getListAccountAPI,
} from "@/api/admin";
import { useMutation, useQuery } from "react-query";
import useMyToast from "./useMyToast";
import { useDispatch } from "react-redux";
import { setListAccount } from "@/redux/slice/account";

function useAdmin() {
  const dispatch = useDispatch();
  const { useSuccess, useError } = useMyToast();
  // Create Expert Account
  const handleCreateExpertAccount = useMutation({
    mutationFn: createExpertAccountAPI,
    onSuccess: (data) => {
      useSuccess("Create Success");
      handleGetListAccount();
    },
    onError: () => {
      useError("Create Fail");
    },
  });
  // Create Admin Account
  const handleCreateAdminAccount = useMutation({
    mutationFn: createAdminAccountAPI,
    onSuccess: (data) => {
      useSuccess("Create Success");
      handleGetListAccount();
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
      dispatch(setListAccount(respone.data));
    },
  });
  // delete Account
  const handleDeleteAccount = useMutation({
    mutationFn: deleteAccountAPI,
    onSuccess: (data) => {
      useSuccess("Delete Success");
      handleGetListAccount();
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
