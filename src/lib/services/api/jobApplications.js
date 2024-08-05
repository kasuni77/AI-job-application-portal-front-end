// export const getJobApllicationsForJob = async (id) => {
//   const token = await window.Clerk.session.getToken();

//   const res = await fetch(`http://localhost:8000/jobApplications?jobid=${id}`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await res.json();
//   return data;
// };

export const getJobApllicationsForJob = async (id) => {
  
  if (!window.Clerk || !window.Clerk.session) {
    throw new Error("Clerk is not initialized properly.");
  }

  try {
    const token = await window.Clerk.session.getToken();
    console.log('Token:', token);
    const res = await fetch(`http://localhost:8000/jobApplications?jobid=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("########### id: " + res)
    if (!res.ok) {
      console.log("Status:", res.status);
      console.log("Status Text:", res.statusText);
      const text = await res.text();
      console.log("Body:", text);
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Expected an array but received a different data type");
    }

    return data;
  } catch (error) {
    console.error("Error fetching job applications:", error);
    return [];
  }
};

// export const getJobApplicationById = async (id) => {
//   const token = await window.Clerk.session.getToken();

//   const res = await fetch(`http://localhost:8000/jobApplications/${id}`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await res.json();
//   return data;
// };

export const getJobApplicationById = async (id) => {
  try {
    const token = await window.Clerk.session.getToken();

    const res = await fetch(`http://localhost:8000/jobApplications/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching job application by ID:", error);
    return null;
  }
};

export const createJobApplication = async ({
  userId,
  fullName,
  job,
  answers,
}) => {
  if (!window.Clerk || !window.Clerk.session) {
    throw new Error("Clerk is not initialized properly!");
  }
  
  const token = await window.Clerk.session.getToken();

  await fetch("http://localhost:8000/jobApplications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId: userId,
      fullName: fullName,
      job,
      answers,
    }),
  });
};

export const deleteJobApplication = async (id) => {

  if (!window.Clerk || !window.Clerk.session) {
    throw new Error("Clerk is not initialized properly!");
  }
  const token = await window.Clerk.session.getToken();

  const res = await fetch(
    `http://localhost:8000/jobApplications/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete job application!");
  }

  return await res.json();
};