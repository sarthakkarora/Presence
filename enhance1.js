let db;

function initIndexedDB() {
  const request = indexedDB.open("AttendanceDB", 1);
  request.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains("attendance")) {
      db.createObjectStore("attendance", { keyPath: "id", autoIncrement: true });
    }
  };
  request.onsuccess = (event) => { db = event.target.result; };
  request.onerror = (event) => { console.error("IndexedDB error:", event.target.errorCode); };
}

function saveAttendanceOffline(attendanceData) {
  const transaction = db.transaction(["attendance"], "readwrite");
  const store = transaction.objectStore("attendance");
  store.add(attendanceData);
  transaction.oncomplete = () => { console.log("Attendance saved locally."); };
  transaction.onerror = (event) => { console.error("Error saving attendance locally:", event.target.error); };
}

// Syncing

 function syncAttendanceToServer() {
  if (navigator.onLine) {
    const transaction = db.transaction(["attendance"], "readonly");
    const store = transaction.objectStore("attendance");
    const request = store.getAll();
    request.onsuccess = async () => {
      const offlineData = request.result;
      if (offlineData.length > 0) {
        try {
          const response = await fetch("https://your-api-endpoint.com/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(offlineData),
          });
          if (response.ok) { clearLocalAttendanceData(); }
        } catch (error) { console.error("Error syncing data:", error); }
      }
    };
  }
}

function clearLocalAttendanceData() {
  const transaction = db.transaction(["attendance"], "readwrite");
  const store = transaction.objectStore("attendance");
  store.clear();
  transaction.oncomplete = () => { console.log("Local attendance data cleared."); };
  transaction.onerror = (event) => { console.error("Error clearing local data:", event.target.error); };
}
