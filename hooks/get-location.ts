export const fetchLocation = async () => {
    const fakeIp = "24.48.0.1";
    try {
      const response = await fetch(
        `/api/get-location?ip=${encodeURIComponent(fakeIp)}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const city = data.data.city;

      return city
    } catch (error) {
      console.error("fetch error in useEffect fetchLoca:", error);
    }
  };