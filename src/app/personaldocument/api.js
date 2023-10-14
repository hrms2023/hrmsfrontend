export const fetchArtist = async (paramsID) => {
    try {
      const response = await fetch(`http://localhost:8080/api/personalDocuments/${paramsID}`);
      const data = await response.json();
console.log("data", data)
      return data;
    } catch (error) {
      throw error;
    }
  };