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

export const uploadImagesIntoImageBB = async (uploadedImages: FileList) => {
  const formDataArray: FormData[] = [];

  if (uploadedImages?.length) {
    const uploadedImagesArray = Array.from(uploadedImages);
    uploadedImagesArray.forEach((image: any) => {
      const formData = new FormData();
      formData.append("image", image);
      formDataArray.push(formData);
    });

    const uploadPromises = formDataArray.map(async (formData) => {
      return await uploadIntoImageBB(formData);
    });

    const uploadedImagesResponse = await Promise.all(uploadPromises);
    return uploadedImagesResponse;
  }
};
