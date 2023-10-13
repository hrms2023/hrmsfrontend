// http://localhost:8090/api/admin/category
export const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:8090/api/admin/category");
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching categories: ' + error.message);
    }
  };

//   http://localhost:8090/api/admin/unit-category

export const fetchUnits = async () => {
    try {
      const response = await fetch("http://localhost:8090/api/admin/unit-item");
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching categories: ' + error.message);
    }
  };


  export const AddCategory = async (formData) => {
    try {
      const response = await fetch('http://localhost:8090/api/admin/category', {
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
  

  export const updateCategory = async (formData) => {
    try {
      const response = await fetch('http://localhost:8090/api/admin/category', {
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