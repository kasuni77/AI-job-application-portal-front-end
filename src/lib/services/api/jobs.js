export const getJobs = async () => {
  const res = await fetch(
    "https://ai-job-portal-back-end-production.up.railway.app/jobs",
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data;
};

export const getJobById = async (id) => {
  if (!window.Clerk || !window.Clerk.session) {
    throw new Error("Clerk is not initialized properly!");
  }
  
  const token = await window.Clerk.session.getToken();

  const res = await fetch(`https://ai-job-portal-back-end-production.up.railway.app/jobs/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
};

export const createJob = async ({
  title,
  description,
  type,
  location,
  questions,
}) => {
  if (!window.Clerk || !window.Clerk.session) {
    throw new Error("Clerk is not initialized properly!");
  }

  const token = await window.Clerk.session.getToken();

  await fetch("https://ai-job-portal-back-end-production.up.railway.app/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      description,
      type,
      location,
      questions,
    }),
  });
};

export const deleteJobById = async (id) => {
  if (!window.Clerk || !window.Clerk.session) {
    throw new Error("Clerk is not initialized properly!");
  }

  const token = await window.Clerk.session.getToken();

  const res = await fetch(
    `https://ai-job-portal-back-end-production.up.railway.app/jobs/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const errorMessage = await res.text(); 
    throw new Error(`Failed to delete job! Status ${res.status}. ${errorMessage}`);
  }

  return { success: true };
};
