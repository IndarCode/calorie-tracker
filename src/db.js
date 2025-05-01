// src/db.js
import { openDB } from 'idb';

const DB_NAME = 'CalorieTrackerDB';
const STORE_NAME1 = 'FoodItems';
const STORE_NAME2 = 'DayDiet';
const STORE_NAME3 = 'DietTarget';

export const initDB = async () => {
  return openDB(DB_NAME, 12, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME1)) {
        const store = db.createObjectStore(STORE_NAME1, {
          keyPath: 'id',
          autoIncrement: true,
        });
        
        // store.createIndex('date', 'date', { unique: false }); // to filter by date
        // store.createIndex('category', 'category', { unique: false }); // optional
      }

      if (!db.objectStoreNames.contains(STORE_NAME2)) {
        const store = db.createObjectStore(STORE_NAME2, {
          keyPath: 'id',
          autoIncrement: true,
        });
        if (!store.indexNames.contains('date_diet')) {
            store.createIndex('date_diet', 'date', { unique: false });
          }
      }

      if (!db.objectStoreNames.contains(STORE_NAME3)) {
        const store = db.createObjectStore(STORE_NAME3, {
          keyPath: 'id',
          autoIncrement: true,
        });
        
        // store.createIndex('date', 'date', { unique: false }); // to filter by date
        // store.createIndex('category', 'category', { unique: false }); // optional
      }
      
    },
  });
};



export const setDietTarget = async (entry) => {
  const db = await initDB();
  console.log(entry, "*********")
  await db.add(STORE_NAME3, entry);
};


export const getDietTarget = async () => {
  const db = await initDB();
  const x = await db.getAll(STORE_NAME3);
  return x;
};

export const addFoodItem = async (entry) => {
  const db = await initDB();
  await db.add(STORE_NAME1, entry);
  const x = await db.getAll(STORE_NAME1);
  console.log(x, "))))))))))))")
};

export const addDiet = async (entry) => {
    const db = await initDB();
    console.log(entry, "*********")
    await db.add(STORE_NAME2, entry);
  };

  export const updateDiet = async (entry) => {
    const db = await initDB();
    console.log(entry, "*********")
    await db.put(STORE_NAME2, entry); 
  };



export const getDietByDate = async (date) => {
  const db = await initDB();
  const x = await db.getAllFromIndex(STORE_NAME2, 'date_diet', date);
  return x;
};

export const getAllFoodItems = async () => {
  const db = await initDB();
  const x = await db.getAll(STORE_NAME1);
  return x;
};

export const deleteFoodItem = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME1, id);
};
