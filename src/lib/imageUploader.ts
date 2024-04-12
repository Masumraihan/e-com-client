export const uploadIntoImageBB = async (formData: FormData) => {
  try {
    const iconResponse = await fetch(
      `https://api.imgbb.com/1/upload?key=71d8095e5dea99d1f6a246e866286b91`,
      {
        method: "POST",
        body: formData,
      },
    );
    const icon = await iconResponse.json();
    return icon;
  } catch (error) {
    console.log(error);
  }
};
