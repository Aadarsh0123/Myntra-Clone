import React, { useState, useEffect } from "react";
import WishlistedItem from "../components/WishlistedItem";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Wishlist = () => {
  const [bagItems, setBagItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBagItems = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const querySnapshot = await getDocs(
          collection(db, "users", user.uid, "wishlist")
        );
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBagItems(items);
      } catch (error) {
        console.error("Error fetching bag items:", error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchBagItems();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleRemove = (id) => {
    const updatedItems = bagItems.filter((item) => item.id !== id);
    setBagItems(updatedItems);
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">My Wishlist</h1>
      {bagItems.length === 0 ? (
        <p className="text-center text-gray-500">
          No items have been wishlisted
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bagItems.map((item) => (
            <WishlistedItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
