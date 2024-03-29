import React from "react";
import { useQuery } from "react-query";

const useVehicles = () => {
  const {
    data: vehicles,
    isLoading,
    refetch,
  } = useQuery("vehicles", () =>
    fetch("https://car-dealer-server.onrender.com/vehicles").then((res) =>
      res.json()
    )
  );
  return [vehicles, isLoading, refetch];
};

export default useVehicles;
