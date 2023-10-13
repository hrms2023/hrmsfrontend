import { convertDateToTimestamp } from "@/app/utils";


export const fetchArtistBio = async (paramsID) => {
  try {
    const response = await fetch(`http://localhost:8090/api/artist-bio-details/get/${paramsID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateArtistBio = async (formData) => {
  try {
    const response = await fetch('http://localhost:8090/api/artist-bio-details/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to update artist bio');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchArtistPolicies = async (paramsID) => {
  try {
    const response = await fetch(`http://localhost:8090/api/artist-policy-details/get/${paramsID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateArtistPolicies = async (formData) => {
  try {
    const response = await fetch('http://localhost:8090/api/artist-policy-details/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to update artist Policies');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const addArtistPolicies = async (formData) => {
  try {
    const response = await fetch('http://localhost:8090/api/artist-policy-details/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to add artist bio');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};


export const updateArtist = async (formData) => {
  try {
    const response = await fetch('http://localhost:8090/api/artist/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to update artist');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};


export const fetchArtistBankDetails = async (artistId) => {
  try {
    const response = await fetch(`http://localhost:8090/api/artist-bank-details/get/${artistId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


export const updateArtistBankDetails = async (formData) => {
  try {
    const response = await fetch('http://localhost:8090/api/artist-bank-details/udpate', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to update artist Bank Details');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (formData) => {
  try {
    const response = await fetch('http://localhost:8090/api/artist/artist-art', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to add artist bio');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};


export const getArtistArtById = async (artistId) => {
  try {
    const response = await fetch(`http://localhost:8090/api/artist/artist-art-by-artist/${artistId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};



export const getArtById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8090/api/artist/artist-art/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateArtistArt = async (formData) => {
  let formValue = {
    id: formData.id,
    artTitle: formData.artTitle,
    artDesc: formData.artDesc,
    currencyID: formData.currencyID,
    artistId: formData.artistId,
    barndId: formData.barndId,
    categoryId: formData.categoryId,
    artHeight: formData.artHeight,
    artWidth: formData.artWidth,
    artBreadth: formData.artBreadth,
    artSKU: formData.artSKU,
    artistId: formData.artistId,
    artWeight: formData.artWeight,
    heightUnitID: formData.heightUnitID,
    widthUnitID: formData.widthUnitID,
    breadthUnitID: formData.breadthUnitID,
    weightUnitID: formData.weightUnitID,
    foreignRegularPrice: formData.foreignRegularPrice,
    foreignSalePrice: formData.foreignSalePrice,
    foreignSaleStartDate: convertDateToTimestamp(formData.foreignSaleStartDate),
    foreignSaleEndDate: convertDateToTimestamp(formData.foreignSaleEndDate),
    soldIndividuallyStatus: formData.soldIndividuallyStatus,
    stockQuantity: formData.stockQuantity,
    lowStockThreshold: formData.lowStockThreshold,
    localSalePrice: formData.localSalePrice,
    localSaleStartDate: convertDateToTimestamp(formData.localSaleStartDate),
    localSaleEndDate: convertDateToTimestamp(formData.localSaleEndDate),
    localGSTRate: formData.localGSTRate,
    localHSNCode: formData.localHSNCode,
    localRegularPrice: formData.localRegularPrice,
    mediumIDs: formData.mediumIDs,
  }
  debugger
  try {
    const response = await fetch('http://localhost:8090/api/artist/artist-art', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
    });

    if (!response.ok) {
      throw new Error('Failed to update artist Bank Details');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};


export const uploadArtistArtVideo = async (file) => {
  try {
    // const singleFile = file[0];
    // const formFileData = new FormData();
    // formFileData.append('file', singleFile);
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append('files', file[i]);
    }
    debugger
    const response = await fetch('http://localhost:8090/api/artist/upload-artist-art-videos-multiple', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error uploading file and calling API');
    }

    const data = await response.json();
    console.log(data);
    const { link } = data.data;
    console.log(link);
    return link;
  } catch (error) {
    throw new Error('Error:', error);
  }
};


export const allArtistListView = async () => {
  try {
    const response = await fetch(`http://localhost:8090/api/artist/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}; 