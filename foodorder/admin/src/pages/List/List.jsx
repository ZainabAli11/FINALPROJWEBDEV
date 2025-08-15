import React, { useState, useEffect } from 'react';
import './List.css';
import axios from "axios";
import { toast } from 'react-toastify';

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
        // Debug: Log the data to see what we're getting
        console.log("Fetched list data:", response.data.data);
      } else {
        toast.error("Error fetching list");
      }
    } catch (error) {
      console.error("Fetch list error:", error);
      toast.error("Server error fetching list");
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id });
      if (response.data.success) {
        toast.success("Food item removed");
        setList(prev => prev.filter(item => item._id !== id));
      } else {
        toast.error(response.data.message || "Failed to remove");
      }
    } catch (error) {
      console.error("Remove error:", error);
      toast.error("Server error removing item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.length > 0 ? (
          list.map((item) => {
            // Debug: Log each item to see the image field
            console.log("Item image field:", item.image);
            
            // Handle different image path scenarios
            let imageUrl;
            if (item.image) {
              // Check if image already contains full URL
              if (item.image.startsWith('http')) {
                imageUrl = item.image;
              } else {
                // Remove any leading slashes or "uploads/" from the image path
                const cleanImageName = item.image.replace(/^(uploads\/|\/uploads\/|\/)?/, '');
                imageUrl = `${url}/uploads/${cleanImageName}`;
              }
            } else {
              imageUrl = "/placeholder.png";
            }
            
            // Debug: Log the constructed URL
            console.log("Constructed image URL:", imageUrl);
            
            return (
              <div key={item._id} className='list-table-format'>
                <img
                  src={imageUrl}
                  alt={item.name || 'Food item'}
                  onError={(e) => { 
                    console.error("Image failed to load:", imageUrl);
                    e.target.src = "/placeholder.png"; 
                  }}
                  onLoad={() => {
                    console.log("Image loaded successfully:", imageUrl);
                  }}
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleRemove(item._id)}
                >
                  x
                </button>
              </div>
            );
          })
        ) : (
          <p style={{ padding: "1rem" }}>No food items found</p>
        )}
      </div>
    </div>
  );
};

export default List;