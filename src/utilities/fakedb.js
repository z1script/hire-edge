// use local storage to manage cart data
const addToDb = (id) => {
  let appliedJobs = getAppliedJobs();
  // add quantity
  const applied = appliedJobs[id];
  if (!applied) {
    appliedJobs[id] = 1;
  } else {
    return;
  }
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const getAppliedJobs = () => {
  let appliedJobs = {};

  //get the shopping cart from local storage
  const stored = localStorage.getItem("applied-jobs");
  if (stored) {
    appliedJobs = JSON.parse(stored);
  }
  return appliedJobs;
};

export {addToDb, getAppliedJobs};
