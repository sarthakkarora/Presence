 function calculateWorkingHours(checkinTime, checkoutTime) {
    const checkin = new Date(checkinTime);
    const checkout = new Date(checkoutTime);
  
    if (checkout <= checkin) {
      throw new Error('Checkout time must be after check-in time');
    }
  
    const diffInMs = checkout - checkin;
    const diffInHours = diffInMs / (1000 * 60 * 60); // Convert milliseconds to hours
  
    return diffInHours.toFixed(2); // Return hours rounded to two decimal places
  }
  
    export default calculateWorkingHours;